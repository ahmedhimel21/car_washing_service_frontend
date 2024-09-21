import { Form, Input } from "antd";
import { Controller } from "react-hook-form";

type TCInputProps = {
  type: string;
  name: string;
  label: string;
  initialValue?: string | number;
  disabled?: boolean;
};

const CInput = ({
  type,
  name,
  label,
  initialValue,
  disabled,
}: TCInputProps) => {
  return (
    <div style={{ marginBottom: "15px" }}>
      <Controller
        defaultValue={initialValue}
        name={name}
        render={({ field, fieldState: { error } }) => (
          <Form.Item initialValue={10000} label={label}>
            <Input
              size="large"
              {...field}
              type={type}
              id={name}
              disabled={disabled}
            />
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
