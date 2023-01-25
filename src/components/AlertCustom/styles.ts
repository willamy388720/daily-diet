import styled, { css } from "styled-components/native";

export const Overlay = styled.View`
  flex: 1;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.25);
  padding: 0 24px;
`;

export const ContainerModal = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  border-radius: 8px;
  padding: 0 24px;
`;

export const ModalText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_600};
  `}
  text-align: center;
  margin-top: 40px;
  margin-bottom: 32px;
`;

export const ContainerButton = styled.View`
  flex-direction: row;
  margin-bottom: 24px;
`;
