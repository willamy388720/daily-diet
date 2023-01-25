import { useNavigation, useRoute } from "@react-navigation/native";
import { useTheme } from "styled-components/native";

import { Button } from "@components/Button";

import { Container, Ilustration, FeedbackText, Title } from "./styles";
import okay from "@assets/Illustration_okay.png";
import notOkay from "@assets/Illustration_not_okay.png";

type RouteParams = {
  isOnTheDiet: string;
};

export function Feedback() {
  const navigation = useNavigation();

  const route = useRoute();

  const { isOnTheDiet } = route.params as RouteParams;

  const { FONT_FAMILY } = useTheme();

  function handleGoHome() {
    navigation.navigate("home");
  }

  return (
    <Container>
      <Title type={isOnTheDiet === "SIM" ? "OKAY" : "NOT_OKAY"}>
        {isOnTheDiet === "SIM" ? "Continue assim!" : "Que pena!"}
      </Title>
      {isOnTheDiet === "SIM" ? (
        <FeedbackText>
          Você continua{" "}
          <FeedbackText style={{ fontFamily: FONT_FAMILY.BOLD }}>
            dentro da dieta
          </FeedbackText>
          . Muito bem!
        </FeedbackText>
      ) : (
        <FeedbackText>
          Você{" "}
          <FeedbackText style={{ fontFamily: FONT_FAMILY.BOLD }}>
            saiu da dieta
          </FeedbackText>{" "}
          dessa vez, mas continue se esforçando e não desista!
        </FeedbackText>
      )}
      <Ilustration source={isOnTheDiet === "SIM" ? okay : notOkay} />
      <Button title="Ir para a página inicial" onPress={handleGoHome} />
    </Container>
  );
}
