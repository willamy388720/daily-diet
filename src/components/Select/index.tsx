import { TouchableOpacityProps } from "react-native";
import { Container, LittleBall, Option, SelectOptions } from "./styles";

type Props = TouchableOpacityProps & {
  option: SelectOptions;
};

export function Select({ option, ...rest }: Props) {
  return (
    <Container option={option} selected={false} {...rest}>
      <LittleBall option={option} />
      <Option>{option === "SIM" ? "Sim" : "Não"}</Option>
    </Container>
  );
}
