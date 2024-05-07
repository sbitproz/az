import { Search } from "@components/Search/Search.styles";
import { SearchWrapper } from "./UserSearch.styles";
import { useUserSearch } from "./useUserSearch";

interface UserSearchProps {
  onSearchQuery: (searchValue: string) => void;
}

export const UserSearch = ({ onSearchQuery }: UserSearchProps) => {
  const { searchValue, onSearch } = useUserSearch(onSearchQuery);

  return (
    <SearchWrapper>
      <Search
        value={searchValue}
        style={{ maxWidth: 300 }}
        onChange={(e) => onSearch(e.target.value)}
      />
    </SearchWrapper>
  );
};
