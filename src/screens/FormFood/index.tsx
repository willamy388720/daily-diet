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

export function FormFood() {
  return (
    <Container>
      <Header>
        <HeaderNavigation type="DEFAULT" title="Nova Refeição" />
      </Header>
      <ContainerForm>
        <TextInput label="Nome" />
        <TextInput label="Descrição" type="TEXTAREA" />
        <ContainerRow>
          <TextInput label="Data" type="MID" />
          <TextInput label="Hora" type="MID" />
        </ContainerRow>
        <Label>Está dentro da dieta?</Label>
        <ContainerRow>
          <Select option="SIM" />
          <Select option="NÃO" />
        </ContainerRow>
      </ContainerForm>
      <ContainerButton>
        <Button title="Cadastrar refeição" />
      </ContainerButton>
    </Container>
  );
}
