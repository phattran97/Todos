import React from "react";
import { classNames } from "../utils";

interface InputFormProps {
  placeholder?: string;
  name?: string;
  register: any;
  isDisabled?: boolean;
  errors?: any;
  inputProps?: any;
  label: string
}
const InputForm: React.FC<InputFormProps> = ({
  placeholder,
  name = "",
  register,
  isDisabled,
  errors,
  inputProps,
  label
}) => {

  return (
    <div>
      <label className="text-xs font-semibold mb-0.5 ">{label}</label>
      <div
        className={`relative rounded-md ${errors && "!border-red-500"}`}
      >
        <input
          id={name}
          name={name}
          disabled={isDisabled}
          placeholder={placeholder}
          className={classNames(
              'w-full outline-none border border-gray-300 focus:border-[#2684FF] rounded px-1 py-1.5 hover:border-[#B3B3B3] text-xs',
              !!errors && errors[name] && '!border-red-500',
          )}
          {...register}
          {...inputProps}
        />
      </div>
    </div>
  );
};

export default InputForm;
