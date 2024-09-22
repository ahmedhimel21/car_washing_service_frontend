import { DatePicker, Form } from "antd";
import { Controller } from "react-hook-form";

type TDatePickerProps = {
  name: string;
  label?: string;
};

const CDatePicker = ({ name, label }: TDatePickerProps) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <Controller
        name={name}
        render={({ field }) => (
          <Form.Item label={label}>
            <DatePicker
              {...field}
              size="large"
              style={{ width: "100%" }}
            ></DatePicker>
          </Form.Item>
        )}
      ></Controller>
    </div>
  );
};
export default CDatePicker;
