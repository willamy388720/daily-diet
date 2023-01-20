import { Container, SubTitle, Title } from "./styles";

type Props = {
  percent?: string;
};

export function Percent({ percent = "90,5" }: Props) {
  return (
    <Container>
      <Title>{percent}%</Title>
      <SubTitle>das refeições dentro da dieta</SubTitle>
    </Container>
  );
}
