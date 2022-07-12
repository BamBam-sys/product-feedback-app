import { Routes, Route } from 'react-router-dom';

import {
  ErrorPage,
  FeedbackDetail,
  FeedbackEdit,
  FeedbackNew,
  Home,
  Roadmap,
} from './pages';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<FeedbackDetail />} />
        <Route path="/edit/:id" element={<FeedbackEdit />} />
        <Route path="/new" element={<FeedbackNew />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
