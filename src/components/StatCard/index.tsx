import { Container, Quantity, StatCardTypeStyleProps, Title } from "./styles";

type Props = {
  type?: StatCardTypeStyleProps;
  quantity: number;
  title: string;
};

export function StatCard({ type = "DEFAULT", quantity, title }: Props) {
  return (
    <Container type={type} style={type !== "DEFAULT" && { width: 165 }}>
      <Quantity>{quantity}</Quantity>
      <Title>{title}</Title>
    </Container>
  );
}
