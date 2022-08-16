import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, GoBack, Input } from '../../common';
import { ReactComponent as ArrowIconUp } from '../../assets/shared/icon-arrow-up.svg';
import { ReactComponent as ArrowIconDown } from '../../assets/shared/icon-arrow-down.svg';

import './productRequestNew.scss';
import { InputDropDown } from '../../components';
import { useDispatch } from 'react-redux';
import { productRequestReceived } from '../../store/productRequestsSlice';
import { validate } from './../../utils';

const FeedbackNew = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    data: { title: '', category: 'Feature', description: '' },
    errors: {},
  });

  const [dropdown, setDropdown] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validate(input);

    setInput((prev) => ({ ...prev, errors: errors || {} }));

    if (errors) return;

    dispatch(productRequestReceived(input.data));
    setInput({
      title: '',
      category: 'Feature',
      description: '',
    });
    navigate('/');
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setInput((prev) => ({ ...prev, errors: { ...prev.errors, [name]: '' } }));
    setInput((prev) => ({ ...prev, data: { ...prev.data, [name]: value } }));
  };

  const handleClick = () => {
    setDropdown((prev) => !prev);
  };

  const handleSelect = (category) => {
    setInput((prev) => ({ ...prev, data: { ...prev.data, category } }));
  };

  const handleCancel = () => {
    navigate(-1);
    setInput({
      data: { title: '', category: 'Feature', description: '' },
      errors: {},
    });
  };

  const btnPropsBlue = {
    bg: '#3A4374',
    hoverBg: '#656EA3',
    text: 'Cancel',
  };

  const btnPropsPurple = {
    bg: '#AD1FEA',
    hoverBg: '#C75AF6',
    text: 'Add Feedback',
  };

  console.log(input);
  const categories = ['Feature', 'UI', 'UX', 'Enhancement', 'Bug'];

  const {
    data: { title, category, description },
    errors,
  } = input;

  return (
    <div className="productRequestNew">
      <GoBack />

      <div className="newFeedback">
        <div className="plusIcon">+</div>
        <h1>Create New Feedback</h1>

        <form onSubmit={handleSubmit}>
          <div className="input">
            <Input
              label={'Feedback Title'}
              name={'title'}
              text={'Add a short, descriptive headline'}
              onChange={handleChange}
              value={title}
              tag={'input'}
              error={errors.title}
            />
          </div>

          <div className="dropdown" onClick={handleClick}>
            <Input
              label={'Category'}
              text={'Choose a category for your feedback'}
              value={category}
              readOnly={true}
              tag={'input'}
            />
            <div className="icon">
              <span>
                {dropdown ? (
                  <ArrowIconUp className="icon" />
                ) : (
                  <ArrowIconDown className="icon" />
                )}
              </span>
            </div>
            {dropdown ? (
              <div className="inputDropdown">
                <InputDropDown
                  data={categories}
                  selectedData={category}
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
              value={description}
              tag={'textarea'}
              error={errors.description}
            />
          </div>

          <div className="btns">
            <div>
              <Button btnProps={btnPropsBlue} onClick={handleCancel} />
            </div>
            <div>
              <Button btnProps={btnPropsPurple} />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FeedbackNew;
