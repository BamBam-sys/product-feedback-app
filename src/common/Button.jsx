import React from 'react';
import { StyledButton } from './styled';

const Button = ({ btnProps: { bg, hoverBg, text }, type, onClick }) => {
  const btnStyles = {
    bg,
    hoverBg,
  };

  return (
    <StyledButton type={type} styles={btnStyles} onClick={onClick}>
      {text}
    </StyledButton>
  );
};

export default Button;
