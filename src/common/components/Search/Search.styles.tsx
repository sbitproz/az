import styled from "@emotion/styled";
import { Input } from "antd";

const { Search: SearchBase } = Input;

export const Search = styled(SearchBase)`
  height: 40px;

  input {
    height: 40px;
    border-radius: 6px;
  }

  span.ant-input-group-addon {
    button.ant-btn.ant-btn-default.ant-btn-icon-only.ant-input-search-button {
      height: 40px;

      border-start-end-radius: 6px;
      border-end-end-radius: 6px;
    }
  }
`;
