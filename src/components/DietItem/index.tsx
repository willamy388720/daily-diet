import {
  Container,
  ContainerHourAndFood,
  Food,
  Hour,
  IsOnTheDiet,
  Separator,
} from "./styles";

export type DietItemProps = {
  hour: string;
  food: string;
  isOnTheDiet: string;
};

export function DietItem({ hour, food, isOnTheDiet }: DietItemProps) {
  return (
    <Container>
      <ContainerHourAndFood>
        <Hour>{hour}</Hour>
        <Separator />
        <Food>{food}</Food>
      </ContainerHourAndFood>
      <IsOnTheDiet belongs={isOnTheDiet} />
    </Container>
  );
}
