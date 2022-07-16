import { ReactComponent as EmptyIcon } from '../../assets/suggestions/illustration-empty.svg';
import { AddFeedbackBtn } from '../../common';
import './noRequests.scss';

const NoRequests = () => {
  return (
    <div className="empty">
      <div className="content">
        <EmptyIcon className="icon" />
        <h1>There is no feedback yet.</h1>
        <p className="p-one">
          Got a suggestion? Found a bug that needs to be squashed? We love
          hearing about new ideas to improve our app.
        </p>
        <AddFeedbackBtn />
      </div>
    </div>
  );
};

export default NoRequests;
