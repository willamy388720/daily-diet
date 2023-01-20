import { useState } from "react";
import { SectionList, Text, View } from "react-native";

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
import { DietItem, DietItemProps } from "@components/DietItem";

const DATA = [
  {
    title: "12.08.22",
    data: [
      { hour: "20:00", food: "Pizza", isOnTheDiet: "NÃO" },
      { hour: "18:00", food: "Burger", isOnTheDiet: "NÃO" },
      { hour: "15:30", food: "Risotto", isOnTheDiet: "SIM" },
    ],
  },
  {
    title: "11.08.22",
    data: [
      { hour: "21:45", food: "French Fries", isOnTheDiet: "SIM" },
      { hour: "19:05", food: "Onion Rings", isOnTheDiet: "SIM" },
      { hour: "10:00", food: "Fried Shrimps", isOnTheDiet: "NÃO" },
    ],
  },
  {
    title: "09.08.22",
    data: [
      { hour: "15:00", food: "Water", isOnTheDiet: "SIM" },
      { hour: "12:00", food: "Coke", isOnTheDiet: "NÃO" },
      { hour: "07:00", food: "Beer", isOnTheDiet: "NÃO" },
    ],
  },
  {
    title: "01.08.22",
    data: [
      { hour: "20:00", food: "Cheese Cake", isOnTheDiet: "NÃO" },
      { hour: "16:00", food: "Ice Cream", isOnTheDiet: "NÃO" },
    ],
  },
];

type ItemProps = {
  title: string;
  data: DietItemProps[];
};

export function Home() {
  const [data, setData] = useState<ItemProps[]>(DATA);

  return (
    <Container>
      <Header>
        <Logo source={logoImg} />
        <Avatar source={avatarImg} />
      </Header>
      <ButtonPercent>
        <Percent />
      </ButtonPercent>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item.food + index}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <ListHeader>
            <ListHeaderTitle>Refeições</ListHeaderTitle>
            <Button title="Nova refeição" iconName="Plus" />
          </ListHeader>
        )}
        renderItem={({ item }) => (
          <DietItem
            hour={item.hour}
            food={item.food}
            isOnTheDiet={item.isOnTheDiet}
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
