import './productRequests.scss';
import { NoRequests, Request } from '..';

const ProductRequests = ({ data }) => {
  return (
    <div className="productRequests">
      {data.length === 0 ? (
        <NoRequests />
      ) : (
        data.map((item) => <Request key={item.id} {...item} />)
      )}
    </div>
  );
};

export default ProductRequests;
