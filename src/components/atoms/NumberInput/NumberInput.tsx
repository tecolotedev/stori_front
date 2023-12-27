import { NumberInput as NumberInputMantine } from "@mantine/core";
import classes from "./NumberInput.module.css";

type Props = {
  label: string;
  value: number;
  onChange: (v: number) => void;
  placeholder?: string;
  min?: number;
  max?: number;
};

export const NumberInput = ({
  label,
  value,
  onChange,
  placeholder,
  min,
  max,
}: Props) => {
  return (
    <NumberInputMantine
      label={label}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(Number(e))}
      classNames={{ label: classes.label }}
      clampBehavior="strict"
      min={min}
      max={max}
    />
  );
};
