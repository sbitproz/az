import { Search, SearchWrapper } from "./UserSearch.styles";
import { useUserSearch } from "./useUserSearch";
import { Button } from "@/common/components/Button/Button.styles";

interface UserSearchProps {
  onSearchQuery: (searchValue: string) => void;
}

export const UserSearch = ({ onSearchQuery }: UserSearchProps) => {
  const { searchValue, onSearch, onClear } = useUserSearch(onSearchQuery);

  return (
    <SearchWrapper>
      <Search
        placeholder="Search by last name"
        value={searchValue}
        role="search"
        onChange={(e) => onSearch(e.target.value)}
      />
      <Button onClick={onClear}>
        Clear
      </Button>
    </SearchWrapper>
  );
};
