import { Input as InputAntd, InputProps as InputPropsAntd } from "antd";
import { InputHTMLAttributes } from "react";

import { BoxInput, TitleInput } from "./input.style";

interface InputProps extends InputPropsAntd {
  label?: string;
}
const Input = ({ label, ...props }: InputProps) => {
  return (
    <BoxInput>
      {label && <TitleInput>{label}</TitleInput>}
      <InputAntd {...props} />
    </BoxInput>
  );
};

export default Input;
