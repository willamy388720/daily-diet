import { TouchableOpacity, View } from "react-native";
import { useTheme } from "styled-components/native";
import { ArrowLeft } from "phosphor-react-native";
import { useNavigation } from "@react-navigation/native";

import { Container, Title } from "./styles";

type ButtonIconTypeProps = "DEFAULT" | "SUCCESS" | "DANGER";

type Props = {
  type: ButtonIconTypeProps;
  title?: string;
};

export function HeaderNavigation({ type, title }: Props) {
  const { COLORS } = useTheme();

  const navigation = useNavigation();

  function colorArrowLeft() {
    switch (type) {
      case "DEFAULT":
        return COLORS.GRAY_600;
      case "SUCCESS":
        return COLORS.GREEN_DARK;
      case "DANGER":
        return COLORS.RED_DARK;
    }
  }

  function handleGoHome() {
    navigation.navigate("home");
  }

  return (
    <Container>
      <TouchableOpacity onPress={handleGoHome}>
        <ArrowLeft size={24} color={colorArrowLeft()} />
      </TouchableOpacity>
      <Title>{title}</Title>
      <View></View>
    </Container>
  );
}
