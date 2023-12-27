import { Select as SelectMantine } from "@mantine/core";
import classes from "./Select.module.css";

type Props = {
  label: string;
  value: string;
  data: string[];
  onChange: (v: string) => void;
  placeholder?: string;
};

export const Select = ({
  label,
  value,
  data,
  onChange,
  placeholder,
}: Props) => {
  return (
    <SelectMantine
      label={label}
      placeholder={placeholder}
      value={value}
      data={data}
      onChange={(e) => onChange(String(e))}
      classNames={{ label: classes.label }}
    />
  );
};
