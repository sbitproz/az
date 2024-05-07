import { useDebounce } from "@/common/hooks/useDebounce/useDebounce";
import { useEffect } from "react";

export const useUserSearch = (onSearchQuery: (search: string) => void) => {
  const [debounceValue, searchValue, onSearch] = useDebounce<string>("");

  useEffect(() => {
    onSearchQuery(debounceValue);
  }, [debounceValue]);

  return { searchValue, onSearch };
};
