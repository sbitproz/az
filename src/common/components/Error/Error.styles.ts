import { spacings } from "@/styles/spacings";
import styled from "@emotion/styled";
import { Flex } from "antd";

export const shouldForwardProp = {
  shouldForwardProp: (prop: string) => !prop.startsWith("$"),
};

export const Container = styled(Flex, shouldForwardProp)<{
  $padding?: boolean;
}>`
  height: 100%;
  width: 100%;
  flex-direction: column;
  align-items: center;
  max-height: 40vh;
  padding: ${({ $padding }: { $padding?: boolean }) =>
    $padding ? spacings.S6 : 0}px;
`;
