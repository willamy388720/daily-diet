import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_300};
  padding-bottom: 24px;
`;

export const ContainerForm = styled.View`
  flex: 9;
  padding: 40px 24px;
`;

export const ContainerRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_600};
  `}
  margin-bottom: 8px;
`;

export const ContainerButton = styled.View`
  flex: 1;
  padding: 0 24px;
  margin-bottom: 40px;
`;
