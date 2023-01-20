import { HeaderNavigation } from "@components/HeaderNavigation";
import { Percent } from "@components/Percent";
import { StatCard } from "@components/StatCard";
import {
  Container,
  ContainerColorfulCards,
  GeneralStatistics,
  Header,
  Title,
} from "./styles";

export function Statistics() {
  return (
    <Container>
      <Header type="PRIMARY">
        <HeaderNavigation type="SUCCESS" />
        <Percent percent="90,86" />
      </Header>
      <GeneralStatistics>
        <Title>Estatísticas gerais</Title>
        <StatCard
          quantity={22}
          title="melhor sequência de pratos dentro da dieta"
        />
        <StatCard quantity={109} title="refeições registradas" />
        <ContainerColorfulCards
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <StatCard
            quantity={99}
            title="refeições dentro da dieta"
            type="SUCCESS"
          />
          <StatCard
            quantity={10}
            title="refeições fora da dieta"
            type="DANGER"
          />
        </ContainerColorfulCards>
      </GeneralStatistics>
    </Container>
  );
}
