import styled, { css } from "styled-components/native";

export type HeaderTypeStyleProps = "PRIMARY" | "DANGER";

type Props = {
  type: HeaderTypeStyleProps;
};

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const Header = styled.View<Props>`
  height: 200px;
  background-color: ${({ theme, type }) =>
    type === "PRIMARY" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

export const GeneralStatistics = styled.View`
  flex: 1;
  padding: 0 24px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_700};
  `}
  margin-top: 33px;
  margin-bottom: 23px;
  align-self: center;
`;

export const ContainerColorfulCards = styled.View`
  flex-direction: "row";
  justify-content: "space-between";
`;
