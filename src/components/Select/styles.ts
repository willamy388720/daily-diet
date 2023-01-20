import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type SelectOptions = "SIM" | "NÃO";

type Props = {
  option: SelectOptions;
  selected: boolean;
};

export const Container = styled(TouchableOpacity)<Props>`
  width: 159.5px;
  min-height: 50px;
  max-height: 50px;
  background-color: ${({ theme, option, selected }) => {
    if (option === "SIM") {
      if (selected) {
        return theme.COLORS.GREEN_LIGHT;
      }
    } else {
      if (selected) {
        return theme.COLORS.RED_LIGHT;
      }
    }
    return theme.COLORS.GRAY_200;
  }};
  border: 1px solid
    ${({ theme, option, selected }) => {
      if (option === "SIM") {
        if (selected) {
          return theme.COLORS.GREEN_DARK;
        }
      } else {
        if (selected) {
          return theme.COLORS.RED_DARK;
        }
      }
      return theme.COLORS.GRAY_200;
    }};
  border-radius: 6px;
  padding: 16px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const LittleBall = styled.View<{ option: SelectOptions }>`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: ${({ theme, option }) =>
    option === "SIM" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
  margin-right: 8px;
`;

export const Option = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_700};
  `}
`;
