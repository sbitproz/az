import { useState } from "react";
import { Meta } from "../api.types";

export const useApiResponse = <T>() => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>();
  const [data, setData] = useState<T>();
  const [meta, setMeta] = useState<Meta>();

  return {
    isLoading,
    setLoading,
    error,
    setError,
    data,
    setData,
    meta,
    setMeta,
  };
};
