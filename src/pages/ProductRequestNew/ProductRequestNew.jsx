import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, GoBack, Input } from '../../common';
import { ReactComponent as ArrowIconUp } from '../../assets/shared/icon-arrow-up.svg';
import { ReactComponent as ArrowIconDown } from '../../assets/shared/icon-arrow-down.svg';

import './productRequestNew.scss';
import { InputDropDown } from '../../components';
import { useDispatch } from 'react-redux';
import { productRequestReceived } from '../../store/productRequestsSlice';

const FeedbackNew = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    title: '',
    category: 'Feature',
    detail: '',
  });

  const [dropdown, setDropdown] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(productRequestReceived(input));
    setInput({
      title: '',
      category: 'Feature',
      detail: '',
    });
    navigate('/');
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleClick = () => {
    setDropdown((prev) => !prev);
  };

  const handleSelect = (category) => {
    setInput((prev) => ({ ...prev, category }));
  };

  const handleCancel = () => {
    navigate(-1);
    setInput({
      title: '',
      category: 'Feature',
      detail: '',
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

  const categories = ['Feature', 'UI', 'UX', 'Enhancement', 'Bug'];

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
              value={input.title}
              tag={'input'}
            />
          </div>

          <div className="dropdown" onClick={handleClick}>
            <Input
              label={'Category'}
              text={'Choose a category for your feedback'}
              value={input.category}
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
                  selectedData={input.category}
                  onClick={handleSelect}
                />
              </div>
            ) : null}
          </div>

          <div className="input">
            <Input
              label={'Feedback Detail'}
              name={'detail'}
              text={
                'Include any specific comments on what should be improved, added, etc.'
              }
              onChange={handleChange}
              value={input.detail}
              tag={'textarea'}
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
