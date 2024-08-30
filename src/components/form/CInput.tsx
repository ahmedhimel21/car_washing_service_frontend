import { Form, Input } from "antd";
import { Controller } from "react-hook-form";

type TCInputProps = {
  type: string;
  name: string;
  label: string;
};

const CInput = ({ type, name, label }: TCInputProps) => {
  return (
    <div style={{ marginBottom: "15px" }}>
      <Controller
        name={name}
        render={({ field, fieldState: { error } }) => (
          <Form.Item label={label}>
            <Input {...field} type={type} id={name} />
            <div>
              {error && <small style={{ color: "red" }}>{error.message}</small>}
            </div>
          </Form.Item>
        )}
      />
    </div>
  );
};

export default CInput;
