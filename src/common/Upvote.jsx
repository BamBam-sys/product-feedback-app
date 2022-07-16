import { ReactComponent as ArrowIconUp } from '../assets/shared/icon-arrow-up.svg';
import { StyledUpvote } from './styles';

const Upvote = ({ upvotes, component }) => {
  return (
    <StyledUpvote component={component}>
      <ArrowIconUp className="icon" />
      <span className="p-three">{upvotes} </span>
    </StyledUpvote>
  );
};

export default Upvote;
