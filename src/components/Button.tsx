import React from 'react';
import styled from '@emotion/styled';

export type ButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export const Button: React.FC<ButtonProps> = ({children, ...props}) => {
  return (
    <StyledButton {...props}>
      {children}
    </StyledButton>
  );
}

export const StyledButton = styled.button`
  // resets
  box-sizing: border-box;
  border: 0;
  margin: 0;
  padding: 0;

  // style

`;
