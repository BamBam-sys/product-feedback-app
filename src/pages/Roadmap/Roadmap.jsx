import './roadmap.scss';
import { Nav, RoadmapColumn } from '../../components';
import { useSelector } from 'react-redux';
import {
  selectPlannedProductRequests,
  selectLiveProductRequests,
  selectProductRequestsInProgress,
} from './../../store/productRequestsSlice';
import { useState } from 'react';

const Roadmap = () => {
  const [active, setActive] = useState('planned');
  const state = useSelector((state) => state);
  const planned = selectPlannedProductRequests(state);
  const inProgress = selectProductRequestsInProgress(state);
  const live = selectLiveProductRequests(state);

  const data = () => {
    if (active === 'planned')
      return (
        <RoadmapColumn
          data={planned}
          title={'Planned'}
          cardTitle={'Planned'}
          subTitle={'Ideas prioritized for research'}
        />
      );
    if (active === 'in-progress')
      return (
        <RoadmapColumn
          data={inProgress}
          title={'In-Progress'}
          cardTitle={'In Progress'}
          subTitle={'Currently being developed'}
        />
      );
    if (active === 'live')
      return (
        <RoadmapColumn
          data={live}
          title={'Live'}
          cardTitle={'Live'}
          subTitle={'Released features'}
        />
      );
  };

  return (
    <div className="roadmap container">
      <Nav component={'roadmap'} />
      <div className="menu p-three">
        <div
          className={active === 'planned' ? 'active' : ''}
          onClick={() => setActive('planned')}
        >
          Planned ({planned.length})
        </div>
        <div
          className={active === 'in-progress' ? 'active' : ''}
          onClick={() => setActive('in-progress')}
        >
          In-Progress ({inProgress.length})
        </div>
        <div
          className={active === 'live' ? 'active' : ''}
          onClick={() => setActive('live')}
        >
          Live ({live.length})
        </div>
      </div>
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
      <div className="roadmapsMobile">{data()}</div>
    </div>
  );
};

export default Roadmap;
