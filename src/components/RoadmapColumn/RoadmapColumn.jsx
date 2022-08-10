import { Card } from '..';
import './roadmapColumn.scss';
import { useNavigate } from 'react-router-dom';

const RoadmapColumn = ({ data, title, subTitle, cardTitle }) => {
  const navigate = useNavigate();
  return (
    <div className="roadmapColumn">
      <div className="heading">
        <h3>
          {title} ({data.length})
        </h3>
        <p className="p-one">{subTitle}</p>
      </div>
      <div className="cards">
        {data.map((req) => (
          <Card
            key={req.id}
            {...req}
            cardTitle={cardTitle}
            onClick={() => navigate(`/detail/${req.id}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default RoadmapColumn;
