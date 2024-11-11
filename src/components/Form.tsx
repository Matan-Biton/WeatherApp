import Input from "./Input";
interface FormProps {
  fields: string[];
}
const Form = ({ fields }: FormProps) => {
  return (
    <form className="flex flex-col p-2 gap-4">
      <div className="flex flex-col gap-2">
        {fields.map((input) => (
          <Input key={input} field={input} type="text" required />
        ))}
        <button className="border-2 border-black rounded-md py-1 px-2">
          Send
        </button>
      </div>
    </form>
  );
};

export default Form;
