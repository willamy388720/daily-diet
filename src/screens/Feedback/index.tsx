import { Button } from "@components/Button";
import {
  Container,
  Ilustration,
  FeedbackText,
  Title,
  DietTypeStyleProps,
} from "./styles";
import okay from "@assets/Illustration_okay.png";
import notOkay from "@assets/Illustration_not_okay.png";
import { useTheme } from "styled-components/native";

type Props = {
  type: DietTypeStyleProps;
};

export function Feedback({ type = "NOT_OKAY" }: Props) {
  const { FONT_FAMILY } = useTheme();
  return (
    <Container>
      <Title type={type}>
        {type === "OKAY" ? "Continue assim!" : "Que pena!"}
      </Title>
      {type === "OKAY" ? (
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
      <Ilustration source={type === "OKAY" ? okay : notOkay} />
      <Button title="Ir para a página inicial" />
    </Container>
  );
}
