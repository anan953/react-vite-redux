export interface CacheItem<T> {
  data: T;
  timestamp: number;
}

export interface CacheConfig {
  duration: number; // Cache duration in milliseconds
}

export class CacheManager {
  private cache: Map<string, CacheItem<unknown>>;
  private readonly duration: number;

  constructor(config: CacheConfig) {
    this.cache = new Map();
    this.duration = config.duration;
  }

  get<T>(key: string): T | null {
    const cached = this.cache.get(key);
    if (cached && Date.now() - cached.timestamp < this.duration) {
      return cached.data as T;
    }
    this.delete(key);
    return null;
  }

  set<T>(key: string, data: T): void {
    this.cache.set(key, {
      data,
      timestamp: Date.now(),
    });
  }

  delete(key: string): void {
    this.cache.delete(key);
  }

  clear(): void {
    this.cache.clear();
  }

  has(key: string): boolean {
    return this.cache.has(key);
  }

  getSize(): number {
    return this.cache.size;
  }
}
