import { Comment, Tag, Upvote } from '../../common';
import './request.scss';

const Request = ({ title, category, description, upvotes, comments }) => {
  return (
    <div className="request">
      <div className="votes">
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
