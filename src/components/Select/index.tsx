import { TouchableOpacityProps } from "react-native";
import { Container, LittleBall, Option } from "./styles";

type Props = TouchableOpacityProps & {
  option: string;
  selectedOption: string;
};

export function Select({ option, selectedOption, ...rest }: Props) {
  return (
    <Container option={option} selected={option === selectedOption} {...rest}>
      <LittleBall option={option} />
      <Option>{option === "SIM" ? "Sim" : "Não"}</Option>
    </Container>
  );
}
