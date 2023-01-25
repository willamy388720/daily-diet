import { useCallback, useState } from "react";
import { Alert, SectionList, View } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";

import {
  Avatar,
  Container,
  Header,
  ListHeader,
  ListHeaderTitle,
  Logo,
  SectionHeader,
  Footer,
} from "./styles";

import logoImg from "@assets/Logo.png";
import avatarImg from "@assets/avatar.jpg";
import { Percent } from "@components/Percent";
import { ButtonPercent } from "@components/ButtonPercent";
import { Button } from "@components/Button";
import { DietItem } from "@components/DietItem";
import { dateGetAll } from "@storage/date/dateGetAll";
import { foodGetAll } from "@storage/food/foodGetAll";

export type ItemProps = {
  title: string;
  data: FoodStorageDTO[];
};

export function Home() {
  const [data, setData] = useState<ItemProps[]>([]);
  const [percent, setPercent] = useState(0);
  const [percentageTreated, setPercentageTreated] = useState("");

  const navigation = useNavigation();

  function handleStatitics() {
    navigation.navigate("statistics", { percentage: percentageTreated });
  }

  function handleNewFood() {
    navigation.navigate("formFood");
  }

  function handleFood(date: string, name: string) {
    navigation.navigate("food", { date, name });
  }

  function calculatePercentage(foods: FoodStorageDTO[]) {
    const total = foods.length;
    const isOnTheDiet = foods.filter(
      (food) => food.isOnTheDiet === "SIM"
    ).length;

    const foodPercentage = (100 * isOnTheDiet) / total;

    setPercent(foodPercentage);
    setPercentageTreated(foodPercentage.toFixed(2).replace(".", ","));
  }

  async function fetchFoods() {
    try {
      const storedDates = await dateGetAll();
      const storedFoods = await foodGetAll();

      calculatePercentage(storedFoods);

      const storage = storedDates.map((storedDate) => {
        return {
          title: storedDate,
          data: storedFoods.filter((food) => food.date === storedDate),
        };
      });

      setData(storage);
    } catch (error) {
      Alert.alert("Refeições", "Não foi possível carregar as Refeições!");
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchFoods();
    }, [])
  );

  return (
    <Container>
      <Header>
        <Logo source={logoImg} />
        <Avatar source={avatarImg} />
      </Header>
      <ButtonPercent
        type={percent >= 60 ? "PRIMARY" : "DANGER"}
        onPress={handleStatitics}
      >
        <Percent percent={percentageTreated} />
      </ButtonPercent>
      <SectionList
        sections={data}
        keyExtractor={(item, index) => item.name + index}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 90 }}
        ListHeaderComponent={() => (
          <ListHeader>
            <ListHeaderTitle>Refeições</ListHeaderTitle>
            <Button
              title="Nova refeição"
              iconName="Plus"
              onPress={handleNewFood}
            />
          </ListHeader>
        )}
        renderItem={({ item }) => (
          <DietItem
            hour={item.hour}
            food={item.name}
            isOnTheDiet={item.isOnTheDiet}
            onPress={() => handleFood(item.date, item.name)}
          />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <SectionHeader>{title}</SectionHeader>
        )}
      />
      <Footer />
    </Container>
  );
}
