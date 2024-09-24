import { Form, Select } from "antd";
import { Controller } from "react-hook-form";
type TCSelect = {
  label: string;
  name: string;
  options: { value: string; label: string; disabled?: boolean }[];
};

const CSelect = ({ label, name, options }: TCSelect) => {
  return (
    <Controller
      name={name}
      render={({ field, fieldState: { error } }) => (
        <Form.Item label={label}>
          <Select
            size="large"
            style={{ width: "100%" }}
            {...field}
            options={options}
          ></Select>
          <div>
            {error && <small style={{ color: "red" }}>{error.message}</small>}
          </div>
        </Form.Item>
      )}
    ></Controller>
  );
};

export default CSelect;
