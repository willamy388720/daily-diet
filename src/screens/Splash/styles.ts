import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image`
  width: 120px;
  height: 55px;
`;
