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

  // custom
  background-color: var(--bg-color, lightgrey);

  // style
  padding: 0.5em 0.75em;
  border-radius: 0.25rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5em;
  border-bottom: 0.25em solid rgba(0,0,0,0.15);
  transition:
    border 60ms ease-in-out,
    transform 60ms ease-in-out;

  :focus-visible {
    box-shadow: 0 0 0 0.1rem var(--focus-color, currentColor);
  }

  :active:not(:disabled) {
    border-bottom: 0.1em solid rgba(0,0,0,0.20);
    transform: translateY(0.15em);
  }

  :disabled {
    filter: brightness(85%);
  }
`;

export const PrimaryButton = styled(Button)`
  font-size: 1.25rem;
`;
