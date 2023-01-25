import { useCallback, useState } from "react";
import { Alert } from "react-native";
import { useRoute, useFocusEffect } from "@react-navigation/native";

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
import { dateGetAll } from "@storage/date/dateGetAll";
import { foodGetAll } from "@storage/food/foodGetAll";

type RouteParams = {
  percentage: string;
};

export function Statistics() {
  const [bestSquence, setBestSquence] = useState(0);
  const [foodsTotal, setFoodsTotal] = useState(0);
  const [isOnTheDiet, setIsOnTheDiet] = useState(0);
  const [itsOutOfTheDiet, setItsOutOfTheDiet] = useState(0);

  const route = useRoute();

  const { percentage } = route.params as RouteParams;

  const percentageFloat = parseFloat(percentage.replace(",", "."));

  async function fetchFoods() {
    try {
      const storedDates = await dateGetAll();
      const storedFoods = await foodGetAll();

      const storage = storedDates.map((storedDate) => {
        return {
          title: storedDate,
          data: storedFoods.filter((food) => food.date === storedDate),
        };
      });

      const inside = storedFoods.filter(
        (food) => food.isOnTheDiet === "SIM"
      ).length;

      let oldSequence = 0;
      let count = 0;

      storage.forEach((item) => {
        item.data.map((food) => {
          if (food.isOnTheDiet === "SIM") {
            count++;
          } else {
            oldSequence = count > oldSequence ? count : oldSequence;
            count = 0;
          }
        });
      });

      setBestSquence(oldSequence);
      setFoodsTotal(storedFoods.length);
      setIsOnTheDiet(inside);
      setItsOutOfTheDiet(storedFoods.length - inside);
    } catch (error) {
      Alert.alert(
        "Refeições",
        "Não foi possível carregar os dados das refeições!"
      );
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchFoods();
    }, [])
  );

  return (
    <Container>
      <Header type={percentageFloat >= 60 ? "PRIMARY" : "DANGER"}>
        <HeaderNavigation type={percentageFloat >= 60 ? "SUCCESS" : "DANGER"} />
        <Percent percent={percentage} />
      </Header>
      <GeneralStatistics>
        <Title>Estatísticas gerais</Title>
        <StatCard
          quantity={bestSquence}
          title="melhor sequência de pratos dentro da dieta"
        />
        <StatCard quantity={foodsTotal} title="refeições registradas" />
        <ContainerColorfulCards
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <StatCard
            quantity={isOnTheDiet}
            title="refeições dentro da dieta"
            type="SUCCESS"
          />
          <StatCard
            quantity={itsOutOfTheDiet}
            title="refeições fora da dieta"
            type="DANGER"
          />
        </ContainerColorfulCards>
      </GeneralStatistics>
    </Container>
  );
}
