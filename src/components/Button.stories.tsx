import React from 'react';
import { Story, Meta } from '@storybook/react';

import {Button, ButtonProps} from './Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ButtonProps> = ({children, ...args}) => <Button {...args}>{children}</Button>;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Hello'
  // primary: true,
  // label: 'Button',
};
