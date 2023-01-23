import styled, { css } from "styled-components/native";

export type DietTypeStyleProps = "OKAY" | "NOT_OKAY";

type Props = {
  type: DietTypeStyleProps;
};

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  justify-content: center;
  align-items: center;
  padding: 24px;
`;

export const Ilustration = styled.Image`
  margin-bottom: 32px;
`;

export const Title = styled.Text<Props>`
  ${({ theme, type }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;
    color: ${type === "OKAY" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
  `}
  margin-bottom: 8px;
`;

export const FeedbackText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_700};
  `}
  text-align: center;

  margin-bottom: 40px;
`;
