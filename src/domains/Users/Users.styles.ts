import { spacings } from "@/styles/spacings";
import styled from "@emotion/styled";
import {
  Content as ContentBase,
  Header as HeaderBase,
} from "antd/es/layout/layout";
import { Flex } from "antd";
import { colors } from "@/styles/colors";

export const RowWrapper = styled(Flex)`
  flex-direction: row;
`;

export const IconWrapper = styled(Flex)`
  margin-right: ${spacings.S6}px;
`;

export const Header = styled(HeaderBase)`
  height: 80px;
  padding-top: 20px;
  background: ${colors.white100};
  display: flex;
  justify-content: space-between;
`;

export const Content = styled(ContentBase)`
  overflow-y: auto;
  padding: 50px;
`;
