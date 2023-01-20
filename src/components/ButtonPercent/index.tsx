import { TouchableOpacityProps } from "react-native";
import { useTheme } from "styled-components/native";
import { ButtonTypeStyleProps, Container, Icon } from "./styles";

type Props = TouchableOpacityProps & {
  type?: ButtonTypeStyleProps;
};

export function ButtonPercent({ type = "PRIMARY", children, ...rest }: Props) {
  const { COLORS } = useTheme();
  return (
    <Container type={type} {...rest}>
      {children}
      <Icon color={type === "PRIMARY" ? COLORS.GREEN_DARK : COLORS.RED_DARK} />
    </Container>
  );
}
