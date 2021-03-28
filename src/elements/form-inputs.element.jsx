import { Form, Input, InputNumber, Select } from 'antd';
import CustomDatePicker from './date-picker.element';

const { Item: FormItem } = Form;
const { Option } = Select;
const { TextArea } = Input;

export const FormTextField = ({ field, ...props }) => {
  return (
    <FormItem {...field}>
      <Input {...props} />
    </FormItem>
  );
};

export const FormNumberField = ({ field, ...props }) => {
  return (
    <FormItem {...field}>
      <InputNumber {...props} style={{ width: '100%' }} />
    </FormItem>
  );
};

export const FormSelect = ({ field, options, ...props }) => {
  return (
    <FormItem {...field}>
      <Select {...props}>
        {options.map(({ value, label }) => (
          <Option key={label} value={value}>
            {label}
          </Option>
        ))}
      </Select>
    </FormItem>
  );
};

export const FormDatePicker = ({ field, ...props }) => {
  return (
    <FormItem {...field}>
      <CustomDatePicker {...props} style={{ width: '100%' }} />
    </FormItem>
  );
};

export const FormTextArea = ({ field, ...props }) => {
  return (
    <FormItem {...field}>
      <TextArea {...props} />
    </FormItem>
  );
};
