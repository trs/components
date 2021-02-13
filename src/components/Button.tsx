import React from 'react';
import styled from '@emotion/styled';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {

}

export const Button = styled.button`
  // resets
  box-sizing: border-box;
  border: 0;
  margin: 0;
  padding: 0;
  outline: 0;

  // style

  :focus-visible {
    box-shadow: 0 0 0 0.1rem var(--focus-color, currentColor);
  }

  // children
  > i {
    background: green;
  }
`;

export const PrimaryButton = styled(Button)`

`;
