import { StyledTag } from './styles';

const Tag = ({ category }) => {
  return (
    <StyledTag>
      <span className="p-three tag">{category}</span>
    </StyledTag>
  );
};

export default Tag;
