import { useState } from "react";
import { useDebounceValue as useDebounceBase } from "usehooks-ts";

export const useDebounce = <T>(
  initialValue: T,
  timeout: number = 400
): [T, T, React.Dispatch<React.SetStateAction<T>>] => {
  const [value, setValue] = useState<T>(initialValue);
  const debounceValue = useDebounceBase<T>(value, timeout);

  return [debounceValue[0], value, setValue];
};
