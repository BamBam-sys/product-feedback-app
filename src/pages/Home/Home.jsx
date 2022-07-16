import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectProductRequests } from '../../store/productRequestsSlice';
import { Nav, ProductRequests, SideNav } from './../../components';
import _ from 'lodash';

import './home.scss';

const Home = () => {
  const state = useSelector((state) => state);
  const productRequests = selectProductRequests(state);
  const params = useParams();

  const [sort, setSort] = useState({
    param: 'upvotes',
    sortBy: 'desc',
  });

  // filter product requests by status to get suggestions
  const suggestions = productRequests.filter(
    (item) => item.status === 'suggestion'
  );

  //  filter the suggestions list by the category (category is param), if params object is not empty,
  const filteredSuggestions =
    Object.keys(params).length !== 0
      ? suggestions.filter((item) => item.category === params.category)
      : suggestions;

  // sort through suggestions
  const sortedSuggestions = _.orderBy(
    filteredSuggestions,
    [sort.param],
    [sort.sortBy]
  );

  const sortSuggestions = (param, sortBy) => {
    setSort({
      param,
      sortBy,
    });
  };

  return (
    <div className="home container">
      <SideNav />
      <div className="mainContent">
        <Nav
          sortedSuggestions={sortedSuggestions}
          sortSuggestions={sortSuggestions}
        />
        <ProductRequests data={sortedSuggestions} />
      </div>
    </div>
  );
};

export default Home;
