import { TextInput as TextInputMantine } from "@mantine/core";
import classes from "./TextInput.module.css";

type Props = {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
};

export const TextInput = ({ label, value, onChange, placeholder }: Props) => {
  return (
    <TextInputMantine
      label={label}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      classNames={{ label: classes.label }}
    />
  );
};
