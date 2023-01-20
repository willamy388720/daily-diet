import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";

export type InputTypeStyleProps = "TEXT" | "TEXTAREA" | "MID";

type Props = {
  type: InputTypeStyleProps;
  focused: boolean;
};

export const Input = styled(TextInput)<Props>`
  min-height: ${({ type }) => (type === "TEXTAREA" ? 120 : 48)}px;
  max-height: ${({ type }) => (type === "TEXTAREA" ? 120 : 48)}px;
  border: 1px solid
    ${({ theme, focused }) =>
      focused ? theme.COLORS.GRAY_500 : theme.COLORS.GRAY_300};
  color: ${({ theme }) => theme.COLORS.GRAY_700};
  padding: 14px;
  border-radius: 6px;
  margin-bottom: 24px;
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_600};
  `}
  margin-bottom: 4px;
`;
