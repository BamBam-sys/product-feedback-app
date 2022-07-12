import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { feedbackReceived } from '../../store/feedbackSlice';
import { ReactComponent as SuggestionIcon } from '../../assets/suggestions/icon-suggestions.svg';
import { ReactComponent as ArrowIconUp } from '../../assets/shared/icon-arrow-up.svg';
import { ReactComponent as PlusIcon } from '../../assets/shared/icon-plus.svg';
import './home.scss';
import data from '../../data.json';
import ProductFeedbacks from './../../components/ProductFeedbacks/ProductFeedbacks';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = () => {
      dispatch(feedbackReceived(data));
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="home">
      <div className="sidebar">
        <div className="brand">
          <h2>Frontend Mentor</h2>
          <p className="p-two">Feedback Board</p>
        </div>
        <div className="category">
          <p className="p-three">All</p>
          <p className="p-three">UI</p>
          <p className="p-three">UX</p>
          <p className="p-three">Enhancement</p>
          <p className="p-three">Bug</p>
          <p className="p-three">Feature</p>
        </div>
        <div className="roadmap">
          <div className="left">
            <h3>Roadmap</h3>
            <ul>
              <li>Planned</li>
              <li>In-Progress</li>
              <li>Live</li>
            </ul>
          </div>
          <div className="right">
            <Link to="/">View</Link>
            <ul>
              <li>2</li>
              <li>3</li>
              <li>1</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mainContent">
        <div className="nav">
          <SuggestionIcon />

          <div className="count">
            6 <h3>Suggestions</h3>
          </div>

          <div className="sort">
            <p>Sort by</p> : <h4>Most Upvotes</h4>{' '}
            <span>
              <ArrowIconUp />
            </span>
          </div>

          <button className="btn">
            <span>
              <PlusIcon />
            </span>
            Add Feedback
          </button>
        </div>
        <ProductFeedbacks />
      </div>
    </div>
  );
};

export default Home;
