import { spacing } from "@/styles/spacings";
import styled from "@emotion/styled";
import { Header as HeaderBase } from "antd/es/layout/layout";
import { Flex } from "antd";
import { colors } from "@/styles/colors";

export const RowWrapper = styled(Flex)`
  flex-direction: row;
`;

export const IconWrapper = styled(Flex)`
  margin-right: ${spacing.S6}px;
`;

export const Header = styled(HeaderBase)`
height: 80px;
padding-top: 20px;
  margin-bottom: 50px;
  background: ${colors.white100};
`;
