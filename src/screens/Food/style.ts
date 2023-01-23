import styled, { css } from "styled-components/native";

export type HeaderTypeStyleProps = "OKAY" | "NOT_OKAY";

type Props = {
  type: HeaderTypeStyleProps;
};

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const Header = styled.View<Props>`
  background-color: ${({ theme, type }) =>
    type === "OKAY" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  padding-bottom: 24px;
`;

export const Content = styled.View`
  flex: 4;
  padding: 24px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_700};
  `}
  margin-bottom: 8px;
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_600};
  `}
  margin-bottom: 24px;
`;

export const TitleDateHour = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_700};
  `}
  margin-bottom: 8px;
`;

export const DateHour = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_600};
  `}
  margin-bottom: 24px;
`;

export const TypeDiet = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
  width: 144px;
  min-height: 34px;
  max-height: 34px;
  border-radius: 1000px;
`;

export const LittleBall = styled.View<Props>`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: ${({ theme, type }) =>
    type === "OKAY" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
  margin-right: 8px;
`;

export const TypeDietText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_700};
  `}
`;

export const ContainerButton = styled.View`
  flex: 1;
  padding: 24px;
`;
