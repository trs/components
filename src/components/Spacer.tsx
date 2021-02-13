import styled from '@emotion/styled';

type SpacerAxis = 'vertical' | 'horizontal';

export interface SpacerProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'children'> {
  size: number;
  axis?: SpacerAxis;
}

const getSize = (axis: SpacerAxis) => (props: SpacerProps) =>
  props.axis == null || props.axis === axis ? props.size : 1;

const getWidth = getSize('horizontal');
const getHeight = getSize('vertical');

export const Spacer = styled.span<SpacerProps>`
  // resets
  box-sizing: border-box;

  // styles
  display: block;
  width: ${getWidth}px;
  min-width: ${getWidth}px;
  height: ${getHeight}px;
  min-height: ${getHeight}px;
`;

export const InlineSpacer = styled(Spacer)`
  display: inline-block;
`;
