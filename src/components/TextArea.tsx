import React from "react";
import { classNames } from "../utils";
import ErrorMessageForm from "./ErrorMessageForm";

interface ITextarea {
  placeholder?: string;
  name?: string;
  register: any;
  isDisabled?: boolean;
  errors?: any;
  inputProps?: any;
  label: string;
  isRequired?: boolean
}
const TextareaForm: React.FC<ITextarea> = ({
  placeholder,
  name = "",
  register,
  isDisabled,
  errors,
  inputProps,
  label,
  isRequired
}) => {
  return (
    <div>
      <label className="text-xs font-semibold mb-0.5 ">{label} {isRequired && <span className="text-red-500">*</span>}</label>
      <div className={`relative rounded-md ${errors && "!border-red-500"}`}>
        <div className={`relative rounded-md ${errors && "!border-red-500"}`}>
          <textarea
            id={name}
            name={name}
            disabled={isDisabled}
            placeholder={placeholder}
            className={classNames(
              "w-full outline-none border border-gray-300 focus:border-[#2684FF] rounded px-1 py-1.5 hover:border-[#B3B3B3] text-xs",
              !!errors && errors[name] && "!border-red-500"
            )}
            {...register}
            {...inputProps}
          />
          <ErrorMessageForm errors={errors} name={name} />
        </div>
      </div>
    </div>
  );
};

export default TextareaForm;
