import { ReactComponent as PlusIcon } from '../assets/shared/icon-plus.svg';
import { Styledbutton } from './styles';

const AddFeedbackBtn = () => {
  return (
    <Styledbutton>
      <span>
        <PlusIcon className="icon" />
      </span>
      Add Feedback
    </Styledbutton>
  );
};

export default AddFeedbackBtn;
