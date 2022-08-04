import { StyledComment } from './styled';
import { ReactComponent as CommentsIcon } from '../assets/shared/icon-comments.svg';

const Comment = ({ comments }) => {
  const replies = comments?.map((item) =>
    item.replies ? item.replies.length : 0
  );

  const count = replies?.reduce((prev, curr) => prev + curr, comments?.length);

  return (
    <StyledComment opacity={comments?.length === 0 ? 0.5 : 1}>
      <span>
        <CommentsIcon />
      </span>
      <span className="p-three">{count}</span>
    </StyledComment>
  );
};

export default Comment;
