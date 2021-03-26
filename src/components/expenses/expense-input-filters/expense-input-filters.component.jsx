import { Col, Input, Row, Select } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CustomDatePicker from '../../../elements/date-picker.element';
import { selectSift } from '../../../store/selectors.js';
import { siftActions } from '../../../store/slices/sift.slice.js';
import { categoryOptions, sortByOptions } from '../../../utils/expenses.utils';
import styles from './expense-input-filters.module.scss';

const { RangePicker } = CustomDatePicker;
const { Option } = Select;

const ExpenseInputFilters = () => {
  const { search, sortBy, category, dates } = useSelector(selectSift);
  const dispatch = useDispatch();
  const { setSearch, sortByDate, sortByAmount, setCategory, setDates } = siftActions;

  const handleSortChange = (val) => {
    if (val === 'date_desc') dispatch(sortByDate(val));
    if (val === 'date_asc') dispatch(sortByDate(val));
    if (val === 'amount_desc') dispatch(sortByAmount(val));
    if (val === 'amount_asc') dispatch(sortByAmount(val));
  };

  return (
    <section className={styles.box}>
      <div className="container">
        <Row gutter={[16, 16]}>
          <Col xs={24} md={12} xl={6}>
            <Input
              size="large"
              value={search}
              onChange={(e) => dispatch(setSearch(e.target.value))}
              placeholder="Search expenses..."
              className={styles.inputs}
            />
          </Col>
          <Col xs={24} md={12} xl={6}>
            <Select
              size="large"
              defaultValue="date_desc"
              value={sortBy}
              onChange={handleSortChange}
              className={styles.inputs}
            >
              {sortByOptions.map(({ value, label }) => (
                <Option key={label} value={value}>
                  {label}
                </Option>
              ))}
            </Select>
          </Col>
          <Col xs={24} md={12} xl={6}>
            <Select
              size="large"
              defaultValue="all"
              value={category}
              onChange={(val) => dispatch(setCategory(val))}
              className={styles.inputs}
            >
              {categoryOptions.map(({ value, label }) => (
                <Option key={label} value={value}>
                  {label}
                </Option>
              ))}
            </Select>
          </Col>
          <Col xs={24} md={12} xl={6}>
            <RangePicker
              size="large"
              value={dates}
              onChange={(dates) => (dates === null ? dispatch(setDates([null, null])) : dispatch(setDates(dates)))}
              format={'MM-DD-YYYY'}
              className={styles.inputs}
            />
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default ExpenseInputFilters;
