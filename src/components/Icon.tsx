import styled from '@emotion/styled';
import { Button } from './Button';

export const Icon = styled.i`
  // resets
  box-sizing: border-box;

  // style
  display: inline-block;
  width: 10px;
  height: 10px;
  min-width: 10px;
  min-height: 10px;
  background: red;

  ${Button} & {
    background-color: blue;
  }
`;
