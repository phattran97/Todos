interface Ibutton {
  type: "secondary" | "primary";
  onClick?: () => void;
  isSubmitButton?: boolean;
  title: string;
  disabled?: boolean;
}

export default function Button({
  type,
  onClick,
  isSubmitButton,
  title,
  disabled,
}: Ibutton) {
  return (
    <button
      type={isSubmitButton ? "submit" : "button"}
      onClick={onClick}
      className={`disabled:opacity-70 disabled:cursor-not-allowed px-2 py-1 font-semibold text-xs rounded bg-blue-500 text-white ${
        type === "secondary"
          ? "!border !border-gray-300 !bg-white !text-gray-600"
          : ""
      }`}
      disabled={disabled}
    >
      {title}
    </button>
  );
}
