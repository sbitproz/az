import { Search as SearchBase } from "@components/Search/Search.styles";
import styled from "@emotion/styled";
import { Flex } from "antd";
import { spacings } from "@/styles/spacings";

export const SearchWrapper = styled(Flex)`
  justify-content: right;
  gap: ${spacings.S6}px;
`;

export const Search = styled(SearchBase)`
  max-width: 300px;
`;
