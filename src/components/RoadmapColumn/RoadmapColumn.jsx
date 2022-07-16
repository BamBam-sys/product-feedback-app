import { Card } from '..';
import './roadmapColumn.scss';

const RoadmapColumn = ({ data, title, subTitle, cardTitle }) => {
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
          <Card key={req.id} {...req} cardTitle={cardTitle} />
        ))}
      </div>
    </div>
  );
};

export default RoadmapColumn;
