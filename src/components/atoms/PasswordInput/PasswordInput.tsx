import { PasswordInput as PasswordInputMantine } from "@mantine/core";
import classes from "./PasswordInput.module.css";

type Props = {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
};

export const PasswordInput = ({
  label,
  value,
  onChange,
  placeholder,
}: Props) => {
  return (
    <PasswordInputMantine
      label={label}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      classNames={{ label: classes.label }}
    />
  );
};
