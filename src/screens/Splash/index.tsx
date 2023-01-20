import { Container, Logo } from "./styles";

import logoImg from "@assets/Logo.png";

export function Splash() {
  return (
    <Container>
      <Logo source={logoImg} />
    </Container>
  );
}
