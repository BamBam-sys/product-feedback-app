import { ReactComponent as ArrowIconUp } from '../assets/shared/icon-arrow-up.svg';
import { StyledUpvote } from './styles';

const Upvote = ({ upvotes, component }) => {
  return (
    <StyledUpvote component={component}>
      <span className="icon">
        <ArrowIconUp />
      </span>
      <span className="p-three">{upvotes} </span>
    </StyledUpvote>
  );
};

export default Upvote;
