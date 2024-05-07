import { Search } from "@components/Search/Search.styles";
import { SearchWrapper } from "./UserSearch.styles";
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
        style={{ maxWidth: 300 }}
        onChange={(e) => onSearch(e.target.value)}
      />
      <Button style={{marginLeft: 10}} onClick={onClear}>Clear</Button>
    </SearchWrapper>
  );
};
