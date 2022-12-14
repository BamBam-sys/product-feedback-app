import './productRequestDetail.scss';
import { Button, GoBack } from './../../common';
import { useSelector, useDispatch } from 'react-redux';
import {
  commentReceived,
  selectRequest,
  selectUser,
} from './../../store/productRequestsSlice';
import { useParams, useNavigate } from 'react-router-dom';
import { CommentCard, Request } from '../../components';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import CommentInput from '../../common/CommentInput';

const ProductRequestDetail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const state = useSelector((state) => state);
  const user = selectUser(state);

  const { id: reqId } = useParams();
  const [request] = selectRequest(state, +reqId || reqId);

  const [comment, setComment] = useState('');

  const btnPropsBlue = {
    bg: '#4661E6',
    hoverBg: '#7C91F9',
    text: 'Edit Feedback',
  };

  const btnPropsPurple = {
    bg: '#AD1FEA',
    hoverBg: '#C75AF6',
    text: 'Post Comment',
  };

  const replies = request?.comments.map((comment) =>
    comment.replies ? comment.replies.length : 0
  );

  const commentsCount = replies?.reduce(
    (prev, curr) => prev + curr,
    request.comments?.length
  );

  const handleComment = (event) => {
    event.preventDefault();

    if (comment.trim() === '') return;

    dispatch(
      commentReceived({
        id: +reqId || reqId,
        comment: {
          id: uuidv4(),
          content: comment,
          user,
        },
      })
    );

    setComment('');
  };

  const maxChar = 250 - comment.length;

  return (
    <div className="productRequestDetail">
      <div className="productRequest">
        <div className="top">
          <div>
            <GoBack color={'rgba(100, 113, 150, 0.5)'} />
          </div>
          <div>
            <Button
              btnProps={btnPropsBlue}
              onClick={() => navigate(`/edit/${reqId}`)}
            />
          </div>
        </div>
        <div className="bottom">
          <Request {...request} />
        </div>
      </div>

      <div className="commentsList">
        <h3>{commentsCount} Comments</h3>
        {request?.comments.map((comment) => (
          <CommentCard
            comment={comment}
            id={reqId}
            commentId={comment.id}
            key={comment.id}
          />
        ))}
      </div>

      <form className="commentBox" onSubmit={handleComment}>
        <h3>Add Comment</h3>
        <CommentInput
          placeholder={'Type your comment here'}
          value={comment}
          maxLength={'250'}
          onChange={setComment}
        />
        <div>
          <span className="counter p-two">
            {maxChar > 0 ? maxChar : 0} Characters left
          </span>
          <div>
            <Button btnProps={btnPropsPurple} type={'submit'} />
          </div>
        </div>
      </form>
    </div>
  );
};
export default ProductRequestDetail;
