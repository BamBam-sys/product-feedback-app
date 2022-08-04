import './productRequests.scss';
import { NoRequests, Request } from '..';
import { useNavigate } from 'react-router-dom';

const ProductRequests = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div className="productRequests">
      {data.length === 0 ? (
        <NoRequests />
      ) : (
        data.map((item) => (
          <Request
            key={item.id}
            {...item}
            onClick={() => navigate(`/detail/${item.id}`)}
          />
        ))
      )}
    </div>
  );
};

export default ProductRequests;
