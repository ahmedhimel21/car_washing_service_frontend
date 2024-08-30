import { Input } from "antd";
import { Controller } from "react-hook-form";

type TCInputProps = {
  type: string;
  name: string;
  label: string;
};

const CInput = ({ type, name, label }: TCInputProps) => {
  return (
    <div style={{ marginBottom: "15px" }}>
      {label ? label : null}
      <Controller
        name={name}
        render={({ field }) => <Input {...field} type={type} id={name} />}
      />
    </div>
  );
};

export default CInput;
