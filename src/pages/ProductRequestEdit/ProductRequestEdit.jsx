import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import {
  productRequestDeleted,
  productRequestUpdated,
  selectRequest,
} from './../../store/productRequestsSlice';
import GoBack from './../../common/GoBack';
import Input from './../../common/Input';
import { ReactComponent as ArrowIconUp } from '../../assets/shared/icon-arrow-up.svg';
import { ReactComponent as ArrowIconDown } from '../../assets/shared/icon-arrow-down.svg';
import InputDropDown from './../../components/InputDropDown/InputDropDown';
import { ReactComponent as EditIcon } from '../../assets/shared/icon-edit-feedback.svg';
import Button from './../../common/Button';
import './productRequestEdit.scss';
import { validate } from './../../utils';

const ProductRequestEdit = () => {
  const [input, setInput] = useState();
  const [dropdown, setDropdown] = useState({
    category: false,
    status: false,
  });

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const state = useSelector((state) => state);
  const { id: reqId } = useParams();
  const [request] = selectRequest(state, +reqId || reqId);

  useEffect(() => {
    setInput({ data: { ...request }, errors: {} });
  }, [request]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate(input);

    setInput((prev) => ({ ...prev, errors: errors || {} }));

    if (errors) return;

    dispatch(productRequestUpdated(input.data));
    navigate(`/detail/${reqId}`);
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setInput((prev) => ({
      ...prev,
      errors: { ...prev.errors, [name]: '' },
    }));
    setInput((prev) => ({ ...prev, data: { ...prev.data, [name]: value } }));
  };

  const handleClick = (param) => {
    setDropdown((prev) => ({ ...prev, [param]: !prev[param] }));
  };

  const handleSelect = (item, name) => {
    setInput((prev) => ({
      ...prev,
      data: { ...prev.data, [name]: item },
    }));
  };

  const handleCancel = () => {
    navigate(-1);
  };

  const handleDelete = () => {
    dispatch(productRequestDeleted(input.data));
    navigate(-2);
  };

  const btnPropsOrange = {
    bg: '#D73737',
    hoverBg: '#E98888',
    text: 'Delete',
  };

  const btnPropsBlue = {
    bg: '#3A4374',
    hoverBg: '#656EA3',
    text: 'Cancel',
  };

  const btnPropsPurple = {
    bg: '#AD1FEA',
    hoverBg: '#C75AF6',
    text: 'Save Changes',
  };

  const categories = ['Feature', 'UI', 'UX', 'Enhancement', 'Bug'];
  const status = ['Suggestion', 'Planned', 'In-Progress', 'Live'];

  return (
    <div className="productRequestEdit">
      <GoBack />

      <div className="editFeedback">
        <div className="plusIcon">
          <EditIcon />
        </div>
        <h1>Editing {request && `'${request.title}'`}</h1>

        {input && (
          <form onSubmit={handleSubmit}>
            <div className="input">
              <Input
                label={'Feedback Title'}
                name={'title'}
                text={'Add a short, descriptive headline'}
                onChange={handleChange}
                value={input.data.title}
                tag={'input'}
                error={input.errors.title}
              />
            </div>

            <div
              className="dropdown"
              onClick={() => handleClick('category')}
              style={{ zIndex: '10' }}
            >
              <Input
                label={'Category'}
                text={'Choose a category for your feedback'}
                value={input.data.category}
                readOnly={true}
                tag={'input'}
              />
              <div className="icon">
                <span>
                  {dropdown.category ? (
                    <ArrowIconUp className="icon" />
                  ) : (
                    <ArrowIconDown className="icon" />
                  )}
                </span>
              </div>
              {dropdown.category ? (
                <div className="inputDropdown">
                  <InputDropDown
                    data={categories}
                    name={'category'}
                    selectedData={input.data.category}
                    onClick={handleSelect}
                  />
                </div>
              ) : null}
            </div>

            <div className="dropdown" onClick={() => handleClick('status')}>
              <Input
                label={'Update Status'}
                text={'Change feature state'}
                value={input.data.status}
                readOnly={true}
                tag={'input'}
              />
              <div className="icon">
                <span>
                  {dropdown.status ? (
                    <ArrowIconUp className="icon" />
                  ) : (
                    <ArrowIconDown className="icon" />
                  )}
                </span>
              </div>
              {dropdown.status ? (
                <div className="inputDropdown">
                  <InputDropDown
                    data={status}
                    name={'status'}
                    selectedData={input.data.status}
                    onClick={handleSelect}
                  />
                </div>
              ) : null}
            </div>

            <div className="input">
              <Input
                label={'Feedback Detail'}
                name={'description'}
                text={
                  'Include any specific comments on what should be improved, added, etc.'
                }
                onChange={handleChange}
                value={input.data.description}
                tag={'textarea'}
                error={input.errors.description}
              />
            </div>
            <div className="btns">
              <div className="left">
                <Button
                  btnProps={btnPropsOrange}
                  onClick={handleDelete}
                  type={'button'}
                />
              </div>
              <div className="right">
                <div>
                  <Button
                    btnProps={btnPropsBlue}
                    onClick={handleCancel}
                    type={'button'}
                  />
                </div>
                <div>
                  <Button btnProps={btnPropsPurple} type={'submit'} />
                </div>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ProductRequestEdit;
