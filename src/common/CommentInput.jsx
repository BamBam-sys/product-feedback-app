import React from 'react';
import { StyledCommentInput } from './styled';

const CommentInput = ({ placeholder, value, maxLength, onChange }) => {
  return (
    <StyledCommentInput
      type="text"
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      value={value}
      maxLength={maxLength}
      autoFocus
    />
  );
};

export default CommentInput;
