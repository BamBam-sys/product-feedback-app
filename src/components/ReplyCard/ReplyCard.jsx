import { useState } from 'react';
import { Button, CommentInput } from '../../common';
import './replyCard.scss';
import { useDispatch, useSelector } from 'react-redux';
import { replyReceived, selectUser } from '../../store/productRequestsSlice';
// import { v4 as uuidv4 } from 'uuid';

const ReplyCard = ({ reply }) => {
  const [responseState, setResponseState] = useState(false);
  const [response, setResponse] = useState('');
  const state = useSelector((state) => state);

  const user = selectUser(state);

  const dispatch = useDispatch();

  const btnPropsPurple = {
    bg: '#AD1FEA',
    hoverBg: '#C75AF6',
    text: 'Post Reply',
  };

  const handleResponse = (event) => {
    event.preventDefault();

    dispatch(
      replyReceived({
        id: +reply.id || reply.id,
        reply: {
          content: response,
          replyingTo: reply.user.username,
          user,
        },
        commentId: reply.commentId,
      })
    );

    setResponse('');
    setResponseState(false);
  };
  return (
    <div className="replyCardContainer">
      <div className="replyCard">
        <div className="img">
          <img src={reply.user.image} alt="user" />
        </div>
        <div className="name">
          <h4>{reply.user.name}</h4>
          <span>@{reply.user.username}</span>
        </div>
        <span
          className="p-three reply"
          onClick={() => setResponseState(!responseState)}
        >
          Reply
        </span>
        <p className="replyContent p-two">
          <span>@{reply.replyingTo} </span>
          {reply.content}
        </p>
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
    </div>
  );
};

export default ReplyCard;
