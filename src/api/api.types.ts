export interface ApiResults<T> {
  data: {
    results: T[];
    info: Meta;
  };
}

export interface Meta {
  seed: string;
  results: number;
  page: number;
  version: string;
}
