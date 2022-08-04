import React from 'react';
import { ReactComponent as ArrowIconLeft } from '../assets/shared/icon-arrow-left.svg';
import { useNavigate } from 'react-router-dom';
import { StyledGoBack } from './styled';

const GoBack = ({ color }) => {
  const navigate = useNavigate();
  return (
    <StyledGoBack onClick={() => navigate(-1)} color={color}>
      <ArrowIconLeft />
      <span>Go back</span>
    </StyledGoBack>
  );
};

export default GoBack;
