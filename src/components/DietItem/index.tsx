import { TouchableOpacityProps } from "react-native";
import {
  Container,
  ContainerHourAndFood,
  Food,
  Hour,
  IsOnTheDiet,
  Separator,
} from "./styles";

type DietItemProps = TouchableOpacityProps & {
  hour: string;
  food: string;
  isOnTheDiet: string;
};

export function DietItem({ hour, food, isOnTheDiet, ...rest }: DietItemProps) {
  return (
    <Container {...rest}>
      <ContainerHourAndFood>
        <Hour>{hour}</Hour>
        <Separator />
        <Food>{food}</Food>
      </ContainerHourAndFood>
      <IsOnTheDiet belongs={isOnTheDiet} />
    </Container>
  );
}
