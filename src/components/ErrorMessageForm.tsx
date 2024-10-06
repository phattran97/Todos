import React from "react";
import { ErrorMessage } from "@hookform/error-message";
import { classNames } from "../utils";

const ErrorMessageForm: React.FC<{
  errors: any;
  name: string;
}> = ({ errors, name }) => {
  return (
    <ErrorMessage
      errors={errors}
      name={name}
      render={({ message }) => (
        <p
          className={classNames(
            "normal-case text-xs text-red-500 font-semibold mt-1"
          )}
        >
          {message}
        </p>
      )}
    />
  );
};

export default ErrorMessageForm;
