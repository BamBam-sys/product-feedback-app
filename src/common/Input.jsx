import React from 'react';
import { StyledInput } from './styled';

const Input = ({ label, text, name, onChange, value, readOnly, tag }) => {
  return (
    <div className="formGroup">
      <label htmlFor={name}>
        <h4>{label}</h4>
      </label>
      <p
        style={{
          fontSize: '14px',
          lineHeight: '20px',
          marginTop: '0.2rem',
          marginBottom: '1.6rem',
        }}
      >
        {text}
      </p>
      <StyledInput
        as={tag}
        name={name}
        id={name}
        type={'text'}
        onChange={onChange}
        value={value}
        readOnly={readOnly}
        tag={tag}
      />
    </div>
  );
};

export default Input;
