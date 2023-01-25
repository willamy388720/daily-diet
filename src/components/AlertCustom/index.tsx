import { Modal, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Button } from "@components/Button";
import { foodRemove } from "@storage/food/foodRemove";

import { ContainerButton, ContainerModal, ModalText, Overlay } from "./styles";

type Props = {
  modalVisible: boolean;
  date: string;
  name: string;
  onPress: () => void;
};

export function AlertCustom({ modalVisible, date, name, onPress }: Props) {
  const navigation = useNavigation();

  async function handleRemoveFood() {
    try {
      await foodRemove(date, name);
      navigation.navigate("home");
    } catch (error) {
      Alert.alert("Refeição", "Não foi possível remover a Refeição!");
    }
  }

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={onPress}
      statusBarTranslucent
    >
      <Overlay>
        <ContainerModal>
          <ModalText>
            Deseja realmente excluir o registro da refeição?
          </ModalText>
          <ContainerButton>
            <Button
              title="Cancelar"
              type="SECONDARY"
              onPress={onPress}
              style={{ width: 135, marginRight: 12 }}
            />
            <Button
              title="Sim, excluir"
              style={{ width: 135 }}
              onPress={handleRemoveFood}
            />
          </ContainerButton>
        </ContainerModal>
      </Overlay>
    </Modal>
  );
}
