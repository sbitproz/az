import { colors } from "@/styles/colors";
import styled from "@emotion/styled";
import { Typography } from "antd";

export const { Title: TitleBase } = Typography;

export const LightText = styled.span`
  color: ${colors.grey150};
`;

export const BoldText = styled.div`
  font-weight: 700;
`;

export const Title = styled(TitleBase)`
  && {
    font-size: 28px;
    line-height: 1.5;
  }
`;
