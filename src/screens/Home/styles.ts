import styled, { css } from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  padding: 24px;
`;

export const Header = styled.View`
  flex-direction: row;
  margin-top: 10px;
  justify-content: space-between;
`;

export const Logo = styled.Image`
  width: 82px;
  height: 37px;
`;

export const Avatar = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  border: 2px solid ${({ theme }) => theme.COLORS.GRAY_600};
`;

export const ListHeader = styled.View`
  margin-top: 40px;
`;

export const ListHeaderTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_700};
  `}
  margin-bottom: 8px;
  flex: 1;
`;

export const SectionHeader = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_700};
  `}
  margin-top: 32px;
  margin-bottom: 8px;
`;

export const Footer = styled(LinearGradient).attrs(({ theme }) => ({
  colors: ["transparent", `${theme.COLORS.GRAY_100}`],
}))`
  min-height: 140px;
  max-height: 140px;
  width: 100%;
  position: absolute;
  bottom: 0;
`;
