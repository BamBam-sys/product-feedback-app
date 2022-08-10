import { Link } from 'react-router-dom';
import { ReactComponent as PlusIcon } from '../assets/shared/icon-plus.svg';
import { StyledAddButton } from './styled';

const AddFeedbackBtn = () => {
  const btnStyles = {
    bg: '#ad1fea',
    hoverBg: '#c75af6',
  };

  return (
    <Link to={'/new'} style={{ textDecoration: 'none' }}>
      <StyledAddButton styles={btnStyles}>
        <span>
          <PlusIcon className="icon" />
        </span>
        Add Feedback
      </StyledAddButton>
    </Link>
  );
};

export default AddFeedbackBtn;
