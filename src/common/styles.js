import styled from 'styled-components';

export const StyledUpvote = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.component ? 'row' : 'column')};
  align-items: center;
  gap: 0.8rem;
  padding: ${(props) =>
    props.component ? '1rem 1.5rem' : '1.4rem 1.6rem 0.8rem'};
  background: #f2f4fe;
  border-radius: 10px;
  cursor: pointer;
  transition: all ease-in-out 400ms;

  &:hover {
    background: #cfd7ff;
  }

  @media (max-width: 28em) {
    flex-direction: row;
    padding: 1rem 1.5rem;
  }

  .icon {
    width: 1.2rem;
  }
`;

export const StyledTag = styled.div`
  .tag {
    background: #f2f4ff;
    padding: 0.5rem 1.6rem;
    border-radius: 10px;
    color: #4661e6;
  }
`;

export const StyledComment = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: #3a4374;
  opacity: ${(props) => props.opacity};
`;

export const Styledbutton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background: #ad1fea;
  color: #fff;
  gap: 1rem;
  font-size: 1.4rem;
  font-weight: 700;
  transition: all ease-in-out 400ms;

  &:hover {
    background: #c75af6;
    color: #f2f4ff;
  }
`;
