import './roadmap.scss';
import { Nav, RoadmapColumn } from '../../components';
import { useSelector } from 'react-redux';
import {
  selectPlannedProductRequests,
  selectLiveProductRequests,
  selectProductRequestsInProgress,
} from './../../store/productRequestsSlice';

const Roadmap = () => {
  const state = useSelector((state) => state);
  const planned = selectPlannedProductRequests(state);
  const inProgress = selectProductRequestsInProgress(state);
  const live = selectLiveProductRequests(state);
  return (
    <div className="roadmap container">
      <Nav component={'roadmap'} />
      <div className="roadmaps">
        <RoadmapColumn
          data={planned}
          title={'Planned'}
          cardTitle={'Planned'}
          subTitle={'Ideas prioritized for research'}
        />
        <RoadmapColumn
          data={inProgress}
          title={'In-Progress'}
          cardTitle={'In Progress'}
          subTitle={'Currently being developed'}
        />
        <RoadmapColumn
          data={live}
          title={'Live'}
          cardTitle={'Live'}
          subTitle={'Released features'}
        />
      </div>
    </div>
  );
};

export default Roadmap;
