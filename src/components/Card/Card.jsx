import { Comment, Tag, Upvote } from '../../common';
import './card.scss';

const Card = ({
  cardTitle,
  description,
  title,
  category,
  upvotes,
  comments,
  onClick,
}) => {
  const color = () => {
    if (cardTitle === 'Planned') return '#f49f85';
    if (cardTitle === 'In Progress') return '#ad1fea';
    if (cardTitle === 'Live') return '#62bcfa';
  };

  return (
    <div
      className="card"
      style={{ borderTopColor: `${color()}` }}
      onClick={onClick}
    >
      <div className="status">
        <div className="dot" style={{ background: `${color()}` }}></div>
        <p className="p-one ">{cardTitle}</p>
      </div>
      <div className="text">
        <h3>{title}</h3>
        <p className="p-one">{description} </p>
      </div>
      <Tag category={category} />
      <div className="bottom">
        <Upvote upvotes={upvotes} component={'roadmap'} />
        <Comment comments={comments} />
      </div>
    </div>
  );
};

export default Card;
