import { Container, Title } from "./styles";
import { ArrowLeft } from "phosphor-react-native";
import { useTheme } from "styled-components/native";
import { TouchableOpacity, View } from "react-native";

type ButtonIconTypeProps = "DEFAULT" | "SUCCESS" | "DANGER";

type Props = {
  type: ButtonIconTypeProps;
  title?: string;
};

export function HeaderNavigation({ type, title }: Props) {
  const { COLORS } = useTheme();

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
  return (
    <Container>
      <TouchableOpacity>
        <ArrowLeft size={24} color={colorArrowLeft()} />
      </TouchableOpacity>
      <Title>{title}</Title>
      <View></View>
    </Container>
  );
}
