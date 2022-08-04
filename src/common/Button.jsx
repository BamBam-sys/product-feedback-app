import React from 'react';
import { StyledButton } from './styled';

const Button = ({ btnProps: { bg, hoverBg, text }, onSubmit }) => {
  const btnStyles = {
    bg,
    hoverBg,
  };

  return <StyledButton styles={btnStyles}>{text}</StyledButton>;
};

export default Button;
