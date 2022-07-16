import { StyledComment } from './styles';
import { ReactComponent as CommentsIcon } from '../assets/shared/icon-comments.svg';

const Comment = ({ comments }) => {
  return (
    <StyledComment opacity={comments.length === 0 ? 0.5 : 1}>
      <span>
        <CommentsIcon />
      </span>
      <span className="p-three">{comments ? comments.length : 0}</span>
    </StyledComment>
  );
};

export default Comment;
