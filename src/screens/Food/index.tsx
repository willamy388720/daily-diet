import { useState, useCallback } from "react";
import { Alert } from "react-native";
import {
  useNavigation,
  useFocusEffect,
  useRoute,
} from "@react-navigation/native";

import { Button } from "@components/Button";
import { HeaderNavigation } from "@components/HeaderNavigation";
import {
  Container,
  ContainerButton,
  Content,
  DateHour,
  Description,
  Header,
  LittleBall,
  Title,
  TitleDateHour,
  TypeDiet,
  TypeDietText,
} from "./style";
import { foodGetByName } from "@storage/food/foodGetByName";
import { AlertCustom } from "@components/AlertCustom";

type RouteParams = {
  date: string;
  name: string;
};

export function Food() {
  const [food, setFood] = useState<FoodStorageDTO>();
  const [modalVisible, setModalVisible] = useState(false);

  const route = useRoute();

  const { date, name } = route.params as RouteParams;

  const navigation = useNavigation();

  function handleEditFood() {
    navigation.navigate("formFood", { date, name });
  }

  function handleRemoveFood() {
    setModalVisible((prevState) => !prevState);
  }

  async function fetchFood() {
    try {
      const storage = await foodGetByName(date, name);
      setFood(storage);
    } catch (error) {
      console.log(error);
      Alert.alert("Refeição", "Não foi possível carregar a Refeição!");
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchFood();
    }, [])
  );

  return (
    <Container>
      <AlertCustom
        modalVisible={modalVisible}
        date={date}
        name={name}
        onPress={() => setModalVisible((prevState) => !prevState)}
      />
      <Header type={food?.isOnTheDiet === "SIM"}>
        <HeaderNavigation type="DEFAULT" title="Refeição" />
      </Header>
      <Content>
        <Title>{food?.name}</Title>
        <Description>{food?.description}</Description>
        <TitleDateHour>Data e Hora</TitleDateHour>
        <DateHour>{`${food?.date} às ${food?.hour}`}</DateHour>
        <TypeDiet>
          <LittleBall type={food?.isOnTheDiet === "SIM"} />
          <TypeDietText>
            {food?.isOnTheDiet === "SIM" ? "dentro da dieta" : "fora da dieta"}
          </TypeDietText>
        </TypeDiet>
      </Content>
      <ContainerButton>
        <Button
          type="PRIMARY"
          title="Editar refeição"
          iconName="PencilSimpleLine"
          style={{ marginBottom: 9 }}
          onPress={handleEditFood}
        />
        <Button
          type="SECONDARY"
          title="Excluir refeição"
          iconName="Trash"
          onPress={handleRemoveFood}
        />
      </ContainerButton>
    </Container>
  );
}
