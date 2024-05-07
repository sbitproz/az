import { useRef } from "react"

export const useCacheApi = () => {
  const cache = useRef({});

  return cache;
}