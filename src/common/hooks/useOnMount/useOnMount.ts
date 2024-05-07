import { useEffect, useRef } from "react";

const useOnMount = (fn: any) => {
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
