import React from 'react';
import { Story, Meta } from '@storybook/react';
import { PrelineButton, ButtonProps } from '../components/Button';
import { colors } from './common';
import commonStyles from './common.module.scss';

export default {
    title: 'Preline-React/Button',
    component: PrelineButton,
    argTypes: {},
} as Meta<typeof PrelineButton>;

const Template: Story<ButtonProps<any>> = (args) => <div className={commonStyles.gapContainer}>
    {colors.map(color => <PrelineButton {...args} color={color}>{color[0].toUpperCase() + color.slice(1, color.length)} {args.label}</PrelineButton>)}
</div>;

export const Primary = Template.bind({});
Primary.args = {
    disabled: false,
    outline: false,
    ghost: false,
    pilled: false,
    block: false,
    soft: false,
    label: 'Primary Button',
};

export const Outline = Template.bind({});
Outline.args = {
    disabled: false,
    outline: true,
    ghost: false,
    pilled: false,
    block: false,
    soft: false,
    label: 'Outlined Button',
};

export const Ghost = Template.bind({});
Ghost.args = {
    disabled: false,
    outline: false,
    ghost: true,
    pilled: false,
    block: false,
    soft: false,
    label: 'Ghost Button',
};

export const Disabled = Template.bind({});
Disabled.args = {
    disabled: true,
    outline: false,
    ghost: false,
    pilled: false,
    block: false,
    soft: false,
    label: 'Disabled Button',
};

export const Pilled = Template.bind({});
Pilled.args = {
    disabled: false,
    outline: false,
    ghost: false,
    pilled: true,
    block: false,
    soft: false,
    label: 'Pill Button',
};

export const Block = Template.bind({});
Block.args = {
    disabled: false,
    outline: false,
    ghost: false,
    pilled: false,
    block: true,
    soft: false,
    label: 'Block Button',
};

export const Soft = Template.bind({});
Soft.args = {
    disabled: false,
    outline: false,
    ghost: false,
    pilled: false,
    block: false,
    soft: true,
    label: 'Soft Button',
};
