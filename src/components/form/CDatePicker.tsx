import { DatePicker, Form } from "antd";
import { Controller } from "react-hook-form";
import dayjs from "dayjs";

type TDatePickerProps = {
  name: string;
  label?: string;
};

const CDatePicker = ({ name, label }: TDatePickerProps) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <Controller
        name={name}
        render={({ field, fieldState: { error } }) => (
          <Form.Item label={label}>
            <DatePicker
              {...field}
              size="large"
              style={{ width: "100%" }}
              value={field.value ? dayjs(field.value, "YYYY-MM-DD") : null} // Use dayjs for value
              onChange={(date) => {
                field.onChange(date ? date.format("YYYY-MM-DD") : null); // Convert to string for form state
              }}
            ></DatePicker>
            <div>
              {error && <small style={{ color: "red" }}>{error.message}</small>}
            </div>
          </Form.Item>
        )}
      ></Controller>
    </div>
  );
};
export default CDatePicker;
