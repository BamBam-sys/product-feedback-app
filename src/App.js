import { Routes, Route } from 'react-router-dom';

import {
  ErrorPage,
  Home,
  ProductRequestDetail,
  ProductRequestEdit,
  ProductRequestNew,
  Roadmap,
} from './pages';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { productRequestsReceived } from './store/productRequestsSlice';
import data from './data.json';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const uploadData = () => {
      dispatch(productRequestsReceived(data));
    };

    uploadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path=":category" element={<Home />} />
        </Route>
        <Route path="/detail/:id" element={<ProductRequestDetail />} />
        <Route path="/edit/:id" element={<ProductRequestEdit />} />
        <Route path="/new" element={<ProductRequestNew />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="*" element={<ErrorPage />} />
      </>
    </>
  );
}

export default App;
