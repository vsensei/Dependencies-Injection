export interface User {
  id: number;
  name: string;
}

export interface ApiConfig {
  path: string;
  resources: { [key: string]: string };
}

export interface IHTTP {
  get: (url: string) => Promise<User[]>;
}

export interface ILogger {
  info: (message: string) => void;
  error: (message: string) => void;
}

export interface IUsers {
  http: IHTTP;
  apiConfig: ApiConfig;

  getUsers: () => User[];
}