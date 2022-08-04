import { ReactComponent as PlusIcon } from '../assets/shared/icon-plus.svg';
import { StyledAddButton } from './styled';

const AddFeedbackBtn = () => {
  const btnStyles = {
    bg: '#ad1fea',
    hoverBg: '#c75af6',
  };

  return (
    <StyledAddButton styles={btnStyles}>
      <span>
        <PlusIcon className="icon" />
      </span>
      Add Feedback
    </StyledAddButton>
  );
};

export default AddFeedbackBtn;
