import styled, { css } from "styled-components/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export const Container = styled(KeyboardAwareScrollView)`
  flex: 1;
`;

export const Header = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_300};
  padding-bottom: 24px;
`;

export const ContainerForm = styled.View`
  flex: 1;
  padding: 40px 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
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
  padding: 60px 0;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
`;
