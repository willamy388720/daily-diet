import styled, { css } from "styled-components/native";

export type StatCardTypeStyleProps = "DEFAULT" | "SUCCESS" | "DANGER";

type Props = {
  type: StatCardTypeStyleProps;
};

function backgroundColor(text: StatCardTypeStyleProps, theme: object) {
  switch (text) {
    case "DEFAULT":
      return "transparent";
    case "SUCCESS":
      return "green";
    case "DANGER":
      return "red";
    default:
      return "transparent";
  }
}

export const Container = styled.View<Props>`
  background-color: ${({ theme, type }) => {
    switch (type) {
      case "DEFAULT":
        return theme.COLORS.GRAY_200;
      case "SUCCESS":
        return theme.COLORS.GREEN_LIGHT;
      case "DANGER":
        return theme.COLORS.RED_LIGHT;
      default:
        return "transparent";
    }
  }};
  border-radius: 8px;
  padding: 16px;
  justify-content: center;
  align-items: center;
  margin-bottom: 12px;
`;

export const Quantity = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;
    color: ${theme.COLORS.GRAY_700};
  `}
  margin-bottom: 8px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_600};
  `}
  text-align: center;
`;
