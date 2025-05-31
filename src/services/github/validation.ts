import * as yup from 'yup';

export const userSchema = yup.object({
  avatar_url: yup.string().url().required(),
  login: yup.string().required(),
  name: yup.string().nullable(),
  bio: yup.string().nullable(),
  html_url: yup.string().url().required(),
  public_repos: yup.number().integer().min(0).required(),
  followers: yup.number().integer().min(0).required(),
  following: yup.number().integer().min(0).required(),
});

export const repositorySchema = yup.object({
  id: yup.number().integer().required(),
  name: yup.string().required(),
  html_url: yup.string().url().required(),
  description: yup.string().nullable(),
  stargazers_count: yup.number().integer().min(0).required(),
  language: yup.string().nullable(),
  updated_at: yup.string().required(),
  forks_count: yup.number().integer().min(0).required(),
});

export const repositoriesSchema = yup.array().of(repositorySchema);

export type ValidatedUser = yup.InferType<typeof userSchema>;
export type ValidatedRepository = yup.InferType<typeof repositorySchema>;
export type ValidatedRepositories = yup.InferType<typeof repositoriesSchema>;
