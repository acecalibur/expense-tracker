import { Col, DatePicker, Input, Row, Select } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectSift } from '../../../store/selectors.js';
import { siftActions } from '../../../store/slices/sift.slice.js';

const { RangePicker } = DatePicker;
const { Option } = Select;

const sortByOptions = [
  { value: 'date_desc', label: 'Date: Desc' },
  { value: 'date_asc', label: 'Date: Asc' },
  { value: 'amount_desc', label: 'Amount: Desc' },
  { value: 'amount_asc', label: 'Amount: Asc' },
];

const categoryOptions = [
  { value: 'all', label: 'All' },
  { value: 'housing', label: 'Housing' },
  { value: 'transportation', label: 'Transportation' },
  { value: 'food', label: 'Food' },
  { value: 'utilities', label: 'Utilities' },
  { value: 'insurance', label: 'Insurance' },
  { value: 'medical', label: 'Medical' },
  { value: 'banking', label: 'Banking' },
  { value: 'personal', label: 'Personal' },
  { value: 'recreation', label: 'Recreation' },
  { value: 'miscellaneous', label: 'Miscellaneous' },
];

const ExpenseInputFilters = () => {
  const { search, sortBy, category, dates } = useSelector(selectSift);
  const dispatch = useDispatch();
  const { setSearch, sortByDate, sortByAmount, setCategory, setDates } = siftActions;

  const handleSortChange = (val) => {
    if (val === 'amount_asc') {
      dispatch(sortByAmount(val));
    } else if (val === 'amount_desc') {
      dispatch(sortByAmount(val));
    } else if (val === 'date_asc') {
      dispatch(sortByDate(val));
    } else {
      dispatch(sortByDate());
    }
  };

  return (
    <section>
      <div className="container">
        <Row gutter={[16, 16]}>
          <Col xs={24} md={12} xl={6}>
            <Input
              value={search}
              onChange={(e) => dispatch(setSearch(e.target.value))}
              placeholder="Search expenses..."
            />
          </Col>
          <Col xs={24} md={12} xl={6}>
            <Select defaultValue="date_desc" value={sortBy} onChange={handleSortChange} style={{ width: '100%' }}>
              {sortByOptions.map(({ value, label }) => (
                <Option key={label} value={value}>
                  {label}
                </Option>
              ))}
            </Select>
          </Col>
          <Col xs={24} md={12} xl={6}>
            <RangePicker
              value={dates}
              onChange={(dates) => (dates === null ? dispatch(setDates([null, null])) : dispatch(setDates(dates)))}
              format={'MM-DD-YYYY'}
            />
          </Col>
          <Col xs={24} md={12} xl={6}>
            <Select
              defaultValue="all"
              value={category}
              onChange={(val) => dispatch(setCategory(val))}
              style={{ width: '100%' }}
            >
              {categoryOptions.map(({ value, label }) => (
                <Option key={label} value={value}>
                  {label}
                </Option>
              ))}
            </Select>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default ExpenseInputFilters;
