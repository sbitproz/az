export interface ApiResults<T> {
  data: T[];
}

export interface Meta {
  seed: string;
  results: number;
  page: number;
  version: string;
}
