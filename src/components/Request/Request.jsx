import { Comment, Tag, Upvote } from '../../common';
import './request.scss';

const Request = ({ title, category, description, upvotes, comments }) => {
  return (
    <div className="request">
      <div className="left">
        <Upvote upvotes={upvotes} />
        <div className="productRequest">
          <h3>{title}</h3>
          <p className="p-one">{description}</p>
          <Tag category={category} />
        </div>
      </div>

      <Comment comments={comments} />
    </div>
  );
};

export default Request;
