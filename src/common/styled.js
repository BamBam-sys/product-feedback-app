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

export const StyledButton = styled.button`
  border: none;
  background: ${({ styles }) => styles.bg};
  color: #fff;
  font-size: 1.4rem;
  font-weight: 700;
  transition: all ease-in-out 400ms;

  &:hover {
    background: ${({ styles }) => styles.bg};
    color: #f2f4ff;
  }
`;

export const StyledAddButton = styled(StyledButton)`
  display: flex;
  align-items: center;
  gap: 1rem;
  background: ${({ styles }) => styles.bg};

  &:hover {
    background: ${({ styles }) => styles.hoverBg};
  }
`;

export const StyledGoBack = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  cursor: pointer;

  span {
    font-size: 1.4rem;
    font-weight: 700;
    color: $white-color;
    border-bottom: 1px solid transparent;
    transition: all ease-in-out 200ms;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const StyledCommentInput = styled.input`
  padding: 1.6rem 0 3rem 2.4rem;
  background: #f7f8fd;
  border: none;
  color: #3a4374;
  border-radius: 5px;
  font-size: 1.5rem;
  line-height: 22px;

  &::placeholder {
    color: #3a4374;
  }

  &:focus {
    outline: none;
    border: 1px solid #4661e6;
  }
`;
