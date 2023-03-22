import { Controller } from "react-hook-form";

import { IInput } from "./types";

import { InputContainer, IconContainer, InputText, ErrorText } from "./styles";
const Input = ({
  leftIcon,
  name,
  control,
  errorMessage,
  onChange,
  ...rest
}: IInput) => {
  return (
    <>
      <InputContainer>
        {leftIcon ? <IconContainer>{leftIcon}</IconContainer> : null}
        <Controller
          name={name}
          control={control}
          rules={{ required: true }}
          render={({ field: { value, onChange } }) => (
            <InputText value={value} onChange={onChange} {...rest} />
          )}
        />
      </InputContainer>
      {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
    </>
  );
};

export default Input;
