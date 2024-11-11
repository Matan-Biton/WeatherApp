import { FC, HTMLProps } from "react";

interface InputProps extends HTMLProps<HTMLInputElement> {
  field: string;
}

const Input: FC<InputProps> = ({ field, ...props }) => {
  return (
    <div className="flex justify-between gap-2">
      <label htmlFor={field}>{field}:</label>
      <input
        id={field}
        className="border-2 border-black rounded-md px-2 py-1"
        {...props}
      />
    </div>
  );
};
export default Input;
