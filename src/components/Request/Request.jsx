import { Comment, Tag, Upvote } from '../../common';
import './request.scss';

const Request = ({
  title,
  category,
  description,
  upvotes,
  comments,
  onClick,
}) => {
  return (
    <div className="request" onClick={onClick}>
      <div
        className="votes"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <Upvote upvotes={upvotes} />
      </div>
      <div className="midEl">
        <div className="text">
          <div className="productRequest">
            <h3>{title}</h3>
            <p className="p-one">{description}</p>
          </div>
          <Tag category={category} />
        </div>
      </div>

      <div className="comments">
        <Comment comments={comments} />
      </div>
    </div>
  );
};

export default Request;
