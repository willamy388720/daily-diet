import { Button } from "@components/Button";
import { HeaderNavigation } from "@components/HeaderNavigation";
import {
  Container,
  ContainerButton,
  Content,
  DateHour,
  Description,
  Header,
  HeaderTypeStyleProps,
  LittleBall,
  Title,
  TitleDateHour,
  TypeDiet,
  TypeDietText,
} from "./style";

type Props = {
  type: HeaderTypeStyleProps;
};

export function Food({ type = "OKAY" }: Props) {
  return (
    <Container>
      <Header type={type}>
        <HeaderNavigation type="DEFAULT" title="Refeição" />
      </Header>
      <Content>
        <Title>Sanduíche</Title>
        <Description>
          Sanduíche de pão integral com atum e salada de alface e tomate
        </Description>
        <TitleDateHour>Data e Hora</TitleDateHour>
        <DateHour>12/08/2022 às 16:00</DateHour>
        <TypeDiet>
          <LittleBall type="OKAY" />
          <TypeDietText>dentro da dieta</TypeDietText>
        </TypeDiet>
      </Content>
      <ContainerButton>
        <Button
          type="PRIMARY"
          title="Editar refeição"
          iconName="PencilSimpleLine"
          style={{ marginBottom: 9 }}
        />
        <Button type="SECONDARY" title="Excluir refeição" iconName="Trash" />
      </ContainerButton>
    </Container>
  );
}
