import { TouchableOpacityProps } from "react-native";
import { useTheme } from "styled-components/native";
import {
  ButtonTypeStyleProps,
  Container,
  ContentTitle,
  IconPencilSimpleLine,
  IconPlus,
  IconTrash,
  Title,
} from "./styles";

type IconName = "Plus" | "PencilSimpleLine" | "Trash";

type Props = TouchableOpacityProps & {
  type?: ButtonTypeStyleProps;
  iconName?: IconName;
  title: string;
};

export function Button({ type = "PRIMARY", iconName, title, ...rest }: Props) {
  const { COLORS } = useTheme();

  function renderIcon() {
    switch (iconName) {
      case "Plus":
        return (
          <IconPlus
            color={type === "PRIMARY" ? COLORS.WHITE : COLORS.GRAY_700}
            style={{ marginRight: 12 }}
          />
        );
      case "PencilSimpleLine":
        return (
          <IconPencilSimpleLine
            color={type === "PRIMARY" ? COLORS.WHITE : COLORS.GRAY_700}
            style={{ marginRight: 12 }}
          />
        );
      case "Trash":
        return (
          <IconTrash
            color={type === "PRIMARY" ? COLORS.WHITE : COLORS.GRAY_700}
            style={{ marginRight: 12 }}
          />
        );
      default:
        return;
    }
  }

  return (
    <Container type={type} {...rest}>
      <ContentTitle>
        {renderIcon()}
        <Title type={type}>{title}</Title>
      </ContentTitle>
    </Container>
  );
}
