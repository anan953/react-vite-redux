import axios, { AxiosError } from 'axios';
import type { AxiosInstance, InternalAxiosRequestConfig } from 'axios';
import { CacheManager } from './cache';

export type RequestParams = Record<string, string | number | boolean | undefined>;

export interface APIConfig {
  baseURL: string;
  timeout?: number;
  headers?: Record<string, string>;
  cacheDuration?: number;
  maxRetries?: number;
  retryDelay?: number;
}

export abstract class APIClient {
  protected client: AxiosInstance;
  protected cacheManager: CacheManager;
  protected readonly maxRetries: number;
  protected readonly retryDelay: number;

  constructor(config: APIConfig) {
    this.client = axios.create({
      baseURL: config.baseURL,
      timeout: config.timeout || 10000,
      headers: {
        'Content-Type': 'application/json',
        ...config.headers,
      },
    });

    this.cacheManager = new CacheManager({
      duration: config.cacheDuration || 5 * 60 * 1000, // 5 minutes default
    });
    this.maxRetries = config.maxRetries || 3;
    this.retryDelay = config.retryDelay || 1000; // 1 second default

    this.setupInterceptors();
  }

  protected abstract setupAuthInterceptor(
    config: InternalAxiosRequestConfig
  ): InternalAxiosRequestConfig;

  protected setupInterceptors(): void {
    // Add auth token if available
    this.client.interceptors.request.use((config: InternalAxiosRequestConfig) => {
      return this.setupAuthInterceptor(config);
    });

    // Handle rate limiting and retries
    this.client.interceptors.response.use(
      response => response,
      async (error: AxiosError) => {
        const originalRequest = error.config;

        if (!originalRequest || !this.shouldRetry(error)) {
          throw this.handleError(error);
        }

        // Retry logic
        let retryCount = 0;
        while (retryCount < this.maxRetries) {
          try {
            await new Promise(resolve => setTimeout(resolve, this.retryDelay * (retryCount + 1)));
            return await this.client(originalRequest);
          } catch (retryError) {
            retryCount++;
            if (retryCount === this.maxRetries) {
              throw this.handleError(retryError as AxiosError);
            }
          }
        }
      }
    );
  }

  protected shouldRetry(error: AxiosError): boolean {
    const status = error.response?.status;
    if (!status) return false;

    return (
      status === 429 || // Rate limit
      status === 503 || // Service unavailable
      status >= 500 // Server errors
    );
  }

  protected abstract handleError(error: AxiosError): Error;

  protected getCacheKey(url: string, params?: RequestParams): string {
    return `${url}${params ? JSON.stringify(params) : ''}`;
  }

  protected getFromCache<T>(key: string): T | null {
    return this.cacheManager.get<T>(key);
  }

  protected setCache<T>(key: string, data: T): void {
    this.cacheManager.set(key, data);
  }

  async get<T>(url: string, params?: RequestParams): Promise<T> {
    const cacheKey = this.getCacheKey(url, params);
    const cachedData = this.getFromCache<T>(cacheKey);

    if (cachedData) {
      return cachedData;
    }

    try {
      const response = await this.client.get<T>(url, { params });
      this.setCache(cacheKey, response.data);
      return response.data;
    } catch (error) {
      throw this.handleError(error as AxiosError);
    }
  }
}
