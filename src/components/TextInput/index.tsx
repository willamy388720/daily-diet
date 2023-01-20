import { useState } from "react";
import { TextInputProps, View } from "react-native";
import { useTheme } from "styled-components/native";
import { Input, InputTypeStyleProps, Label } from "./styles";

type Props = TextInputProps & {
  type?: InputTypeStyleProps;
  label: string;
};

export function TextInput({ type = "TEXT", label, ...rest }: Props) {
  const [isFocused, setIsFocused] = useState(false);
  const { COLORS } = useTheme();

  return (
    <View>
      <Label>{label}</Label>
      <Input
        type={type}
        {...rest}
        cursorColor={COLORS.GRAY_700}
        focused={isFocused}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        style={type === "MID" && { width: 154 }}
      />
    </View>
  );
}
