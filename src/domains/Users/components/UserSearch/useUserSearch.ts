import { useDebounce } from "@/common/hooks/useDebounce/useDebounce";
import { useCallback, useEffect } from "react";

export const useUserSearch = (onSearchQuery: (search: string) => void) => {
  const [debounceValue, searchValue, onSearch] = useDebounce<string>("");

  const onClear = useCallback(() => {
    onSearch('');
  },[])

  useEffect(() => {
    onSearchQuery(debounceValue);
  }, [debounceValue]);

  return { searchValue, onSearch, onClear };
};
