import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectProductRequests } from '../../store/productRequestsSlice';
import { Nav, ProductRequests, SideNav } from './../../components';
import _ from 'lodash';

import './home.scss';

const Home = () => {
  const [sort, setSort] = useState({
    param: 'upvotes',
    sortBy: 'desc',
  });
  const state = useSelector((state) => state);
  const productRequests = selectProductRequests(state);
  const params = useParams();

  // filter product requests by status to get suggestions
  const suggestions = productRequests.filter(
    (item) => item.status === 'suggestion'
  );

  //  filter the suggestions list by the category (category is param), if params object is not empty,
  const filteredSuggestions =
    Object.keys(params).length !== 0
      ? suggestions.filter(
          (item) => item.category.toLowerCase() === params.category
        )
      : suggestions;

  // add the number of replies to the number of comments
  const updatedFilteredSuggestions = filteredSuggestions.map((request) => {
    const replies = request.comments.map((comment) =>
      comment.replies ? comment.replies.length : 0
    );

    const commentsCount = replies.reduce(
      (prev, curr) => prev + curr,
      request.comments?.length
    );

    return { ...request, commentsCount };
  });

  // sort through suggestions
  const sortedSuggestions = _.orderBy(
    updatedFilteredSuggestions,
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
