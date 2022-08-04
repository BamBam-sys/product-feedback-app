import { ReplyCard } from '..';
import { Button, CommentInput } from '../../common';
import './commentCard.scss';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { replyReceived, selectUser } from '../../store/productRequestsSlice';

const CommentCard = ({ comment, id, commentId }) => {
  const [responseState, setResponseState] = useState(false);
  const [response, setResponse] = useState('');

  const state = useSelector((state) => state);

  const user = selectUser(state);

  const dispatch = useDispatch();

  const handleResponse = (event) => {
    event.preventDefault();

    dispatch(
      replyReceived({
        id,
        reply: {
          content: response,
          replyingTo: comment.user.username,
          user,
        },
        commentId,
      })
    );

    setResponse('');
    setResponseState(false);
  };

  const leftBorder = comment.replies ? '' : '';
  const borderBottomStyle = {
    borderBottom: comment.replies ? '' : '1px solid rgba(140, 146, 179, 0.2)',
  };

  const btnPropsPurple = {
    bg: '#AD1FEA',
    hoverBg: '#C75AF6',
    text: 'Post Reply',
  };

  return (
    <div className="commentCard" style={borderBottomStyle}>
      <div className={`${leftBorder} card-x`}>
        <div className="img">
          <img src={comment.user.image} alt="user" />
        </div>
        <div className="name">
          <h4>{comment.user.name}</h4>
          <span>@{comment.user.username}</span>
        </div>
        <span
          className="p-three reply"
          onClick={() => setResponseState((prev) => !prev)}
        >
          Reply
        </span>
        <p className="comment p-two">{comment.content}</p>
      </div>

      {responseState && (
        <form className="response" onSubmit={handleResponse}>
          <div className="resInput">
            <CommentInput
              placeholder={'Type your comment here'}
              value={response}
              onChange={setResponse}
            />
          </div>
          <div className="resBtn">
            <Button btnProps={btnPropsPurple} />
          </div>
        </form>
      )}

      {comment.replies?.map((reply) => (
        <div className="replycard">
          <ReplyCard
            key={reply.user.username}
            reply={{ ...reply, id, commentId }}
          />
        </div>
      ))}
    </div>
  );
};

export default CommentCard;
