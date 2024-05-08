import { useEffect, useRef } from "react";

const useOnMount = (fn: Function) => {
  const triggered = useRef<boolean>(false);

  useEffect(() => {
    if (!triggered.current) {
      fn();
      triggered.current = true;
    }
  }, [fn]);

  return null;
};

export default useOnMount;
