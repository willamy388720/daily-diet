import { useState, useCallback } from "react";
import { Alert } from "react-native";
import {
  useNavigation,
  useRoute,
  useFocusEffect,
} from "@react-navigation/native";

import { Button } from "@components/Button";
import { HeaderNavigation } from "@components/HeaderNavigation";
import { Select } from "@components/Select";
import { TextInput } from "@components/TextInput";

import {
  Container,
  ContainerButton,
  ContainerForm,
  ContainerRow,
  Header,
  Label,
} from "./styles";
import { foodCreate } from "@storage/food/foodCreate";
import { AppError } from "@utils/AppError";
import { dateCreate } from "@storage/date/dateCreate";
import { foodGetByName } from "@storage/food/foodGetByName";
import { foodUpdate } from "@storage/food/foodUpdate";

const initialValues: FoodStorageDTO = {
  name: "",
  description: "",
  date: "",
  hour: "",
  isOnTheDiet: "",
};

type RouteParams = {
  date: string;
  name: string;
};

export function FormFood() {
  const [food, setFood] = useState<FoodStorageDTO>(initialValues);

  const { params } = useRoute();

  const navigation = useNavigation();

  async function handleSaveFood() {
    try {
      if (
        food.name.trim() === "" ||
        food.description.trim() === "" ||
        food.date.trim() === "" ||
        food.hour.trim() === "" ||
        food.isOnTheDiet.trim() === ""
      ) {
        return Alert.alert("Salvar Refeição", "Preencha todos os campos");
      }
      await dateCreate(food.date);

      if (params) {
        const { date, name } = params as RouteParams;
        await foodUpdate(date, name, food);
      } else {
        await foodCreate(food);
      }

      navigation.navigate("feedback", { isOnTheDiet: food.isOnTheDiet });
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Salvar Refeição", error.message);
      } else {
        Alert.alert("Salvar Refeição", "Não foi possível salvar a refeição");
      }
    }
  }

  function handleOnChangeText(text: string, input: string) {
    setFood((prevState) => ({ ...prevState, [input]: text }));
  }

  async function fetchFood(date: string, name: string) {
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
      if (params) {
        const { date, name } = params as RouteParams;
        params && fetchFood(date, name);
      }
    }, [])
  );

  return (
    <Container>
      <Header>
        <HeaderNavigation
          type="DEFAULT"
          title={`${params ? "Editar" : "Nova"} Refeição`}
        />
      </Header>
      <ContainerForm>
        <TextInput
          label="Nome"
          value={food.name}
          onChangeText={(text) => handleOnChangeText(text, "name")}
        />
        <TextInput
          label="Descrição"
          type="TEXTAREA"
          value={food.description}
          onChangeText={(text) => handleOnChangeText(text, "description")}
        />
        <ContainerRow>
          <TextInput
            label="Data"
            type="MID"
            value={food.date}
            onChangeText={(text) => handleOnChangeText(text, "date")}
          />
          <TextInput
            label="Hora"
            type="MID"
            value={food.hour}
            onChangeText={(text) => handleOnChangeText(text, "hour")}
          />
        </ContainerRow>
        <Label>Está dentro da dieta?</Label>
        <ContainerRow>
          <Select
            option="SIM"
            selectedOption={food.isOnTheDiet}
            onPress={() => handleOnChangeText("SIM", "isOnTheDiet")}
          />
          <Select
            option="NÃO"
            selectedOption={food.isOnTheDiet}
            onPress={() => handleOnChangeText("NÃO", "isOnTheDiet")}
          />
        </ContainerRow>
        <ContainerButton>
          <Button
            title={`${params ? "Salvar alterações" : "Cadastrar refeição"}`}
            onPress={handleSaveFood}
          />
        </ContainerButton>
      </ContainerForm>
    </Container>
  );
}
