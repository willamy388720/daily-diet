import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { ArrowUpRight } from "phosphor-react-native";

export type ButtonTypeStyleProps = "PRIMARY" | "DANGER";

type Props = {
  type: ButtonTypeStyleProps;
};

export const Container = styled(TouchableOpacity)<Props>`
  flex: 1;
  background-color: ${({ theme, type }) =>
    type === "PRIMARY" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  border-radius: 8px;
  margin-top: 33px;
  min-height: 102px;
  max-height: 102px;
`;

export const Icon = styled(ArrowUpRight).attrs(() => ({
  size: 24,
}))`
  position: absolute;
  width: 24px;
  height: 24px;
  right: 8px;
  top: 8px;
`;
