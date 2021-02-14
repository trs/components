import { Story, Meta } from '@storybook/react';

import {Button, PrimaryButton, ButtonProps} from './Button';
import { Icon } from './Icon';

export default {
  title: 'Button',
  component: Button,
  subcomponents: {
    Icon
  }
} as Meta;

export const Basic: Story<ButtonProps> = ({children, ...args}) =>
  <Button {...args}>Basic</Button>;

export const Disabled: Story<ButtonProps> = ({children, ...args}) =>
  <Button disabled {...args}>Disabled</Button>;

export const Primary: Story<ButtonProps> = ({children, ...args}) =>
  <PrimaryButton {...args}>Primary</PrimaryButton>;

export const WithIcon: Story<ButtonProps> = ({children, ...args}) =>
  <Button {...args}>
    <Icon />
    WithIcon
  </Button>;
