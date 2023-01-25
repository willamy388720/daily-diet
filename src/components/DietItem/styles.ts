import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

type Props = {
  belongs: string;
};

export const Container = styled(TouchableOpacity)`
  /* flex: 1; */
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
  margin-bottom: 8px;
  min-height: 50px;
  max-height: 50px;
  border-radius: 6px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px;
`;

export const ContainerHourAndFood = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Hour = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XS}px;
    color: ${theme.COLORS.GRAY_700};
  `}
`;

export const Separator = styled.View`
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_400};
  min-height: 14px;
  max-height: 14px;
  margin-right: 12px;
  margin-left: 12px;
`;

export const Food = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_600};
  `}
`;

export const IsOnTheDiet = styled.View<Props>`
  width: 14px;
  height: 14px;
  border-radius: 7px;
  background-color: ${({ theme, belongs }) =>
    belongs === "SIM" ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
`;
