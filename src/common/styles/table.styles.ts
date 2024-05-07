import { colors } from "@/styles/colors";
import { css } from "@emotion/react";

export const tableStyles = css`
  cursor: default;
  height: 100%;

  .ant-table-thead tr > th.ant-table-cell {
    background-color: white;
    text-transform: uppercase;
    font-weight: 400;
    font-size: 12px;
    color: ${colors.grey120};
    padding: 13px 8px;
    border-bottom: 1px solid ${colors.grey180};
  }

  .ant-table-tbody tr > td.ant-table-cell {
    font-weight: 400;
    font-size: 12px;
    color: ${colors.black100};
    padding: 13px 15px;
    border-right: 1px solid ${colors.grey185};

    .anticon svg {
      fill: ${colors.black100};
    }
  }
`;
