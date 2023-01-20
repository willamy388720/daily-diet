import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import { Plus, PencilSimpleLine, Trash } from "phosphor-react-native";

export type ButtonTypeStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
  type: ButtonTypeStyleProps;
};

export const Container = styled(TouchableOpacity)<Props>`
  ${({ theme, type }) => css`
    background-color: ${type === "PRIMARY" && theme.COLORS.GRAY_600};
    border-width: ${type === "PRIMARY" ? 0 : 1}px;
    border-color: ${type === "SECONDARY" && theme.COLORS.GRAY_700};
  `}
  flex: 1;
  min-height: 50px;
  max-height: 50px;
  padding: 16px;
  justify-content: center;
  border-radius: 6px;
  align-items: center;
`;

export const ContentTitle = styled.View`
  flex-direction: row;
`;

export const Title = styled.Text<Props>`
  ${({ theme, type }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${type === "PRIMARY" ? theme.COLORS.WHITE : theme.COLORS.GRAY_700};
  `}
`;

export const IconPlus = styled(Plus).attrs(() => ({ size: 18 }))``;

export const IconTrash = styled(Trash).attrs(() => ({ size: 18 }))``;

export const IconPencilSimpleLine = styled(PencilSimpleLine).attrs(() => ({
  size: 18,
}))``;
