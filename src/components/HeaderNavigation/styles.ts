import styled, { css } from "styled-components/native";

export type ButtonIconTypeStyleProps = "DEFAULT" | "SUCCESS" | "DANGER";

export const Container = styled.SafeAreaView`
  margin-top: 56px;
  padding: 0 24px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_700};
  `}
`;
