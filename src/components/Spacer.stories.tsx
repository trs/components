import React from 'react';
import { Story, Meta } from '@storybook/react';

import {Spacer, InlineSpacer, SpacerProps} from './Spacer';

export default {
  title: 'Spacer',
  component: Spacer
} as Meta;

const Template: Story<SpacerProps> = (args) =>
  <Spacer {...args} style={{border: '1px solid red'}} />;

export const Square = Template.bind({});
Square.args = {
  size: 10,
  axis: undefined
};

export const Vertical = Template.bind({});
Vertical.args = {
  size: 10,
  axis: 'vertical'
};

export const Horizontal = Template.bind({});
Horizontal.args = {
  size: 10,
  axis: 'horizontal'
};

const InlineTemplate: Story<SpacerProps> = (args) =>
  <InlineSpacer {...args} style={{border: '1px solid red'}} />;

export const InlineSquare = InlineTemplate.bind({});
InlineSquare.args = {
  size: 10,
  axis: undefined
};

export const InlineVertical = InlineTemplate.bind({});
InlineVertical.args = {
  size: 10,
  axis: 'vertical'
};

export const InlineHorizontal = InlineTemplate.bind({});
InlineHorizontal.args = {
  size: 10,
  axis: 'horizontal'
};
