import { Button, Form, Input, InputNumber, Select, Space } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import CustomDatePicker from '../../../elements/date-picker.element';
import { expenseActions } from '../../../store/slices/expense.slice';
import { categoryOptions } from '../../../utils/expenses.utils';
import styles from './expense-form.module.scss';

const { Item: FormItem } = Form;
const { Option } = Select;
const { TextArea } = Input;

const ExpenseForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { createExpense } = expenseActions;

  const handleSubmit = (values) => {
    dispatch(createExpense(values));
    history.push('/dashboard');
  };

  return (
    <div className="container-narrow">
      <div className={styles.box}>
        <Form onFinish={handleSubmit} layout="vertical">
          <FormItem
            label="Description"
            name="description"
            rules={[{ required: true, message: 'Please provide a description.' }]}
          >
            <Input placeholder="Lunch" />
          </FormItem>
          <FormItem label="Amount" name="amount" rules={[{ required: true, message: 'Please provide an amount!' }]}>
            <InputNumber
              formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
              precision={2}
              placeholder="12.75"
              className={styles.fluid}
            />
          </FormItem>
          <FormItem label="Category" name="category" rules={[{ required: true, message: 'Please select a category!' }]}>
            <Select allowClear showSearch placeholder="Food">
              {categoryOptions.slice(1).map(({ value, label }) => (
                <Option key={label} value={value}>
                  {label}
                </Option>
              ))}
            </Select>
          </FormItem>
          <FormItem label="Date" name="date" rules={[{ required: true, message: 'Please pick a date!' }]}>
            <CustomDatePicker format={'MM-DD-YYYY'} placeholder="03-22-2021" className={styles.fluid} />
          </FormItem>
          <FormItem label="Note" name="note">
            <TextArea rows="3" placeholder="Chipotle (This field is optional...)" />
          </FormItem>
          <div className={styles.btnGroup}>
            <div>
              <Space>
                <Button className="btn">Cancel</Button>
                <Button className="btn-negative">Delete</Button>
              </Space>
            </div>
            <Button htmlType="submit" className="btn-positive">
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default ExpenseForm;
