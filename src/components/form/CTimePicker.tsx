import { Controller, useFormContext } from "react-hook-form";
import { Form, TimePicker } from "antd";
import dayjs from "dayjs";

type TCTimePicker = {
  name: string;
  label: string;
};

const CTimePicker = ({ name, label }: TCTimePicker) => {
  const { control } = useFormContext();

  return (
    <div style={{ marginBottom: "10px" }}>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <>
            <Form.Item label={label}>
              <TimePicker
                {...field}
                size="large"
                style={{ width: "100%" }}
                format="HH:mm"
                value={field.value ? dayjs(field.value, "HH:mm") : null} // Use dayjs for value
                onChange={(time) => {
                  field.onChange(time ? time.format("HH:mm") : null); // Convert to string for form state
                }}
              />
              {error && <small style={{ color: "red" }}>{error.message}</small>}
            </Form.Item>
          </>
        )}
      ></Controller>
    </div>
  );
};

export default CTimePicker;
