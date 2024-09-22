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
      render={({ field }) => (
        <Form.Item label={label}>
          <Select
            style={{ width: "100%" }}
            {...field}
            options={options}
          ></Select>
        </Form.Item>
      )}
    ></Controller>
  );
};

export default CSelect;
