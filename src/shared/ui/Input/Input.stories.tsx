import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Input } from 'shared/ui/Input/Input';

export default {
    title: 'shared/Input',
    component: Input,
    argTypes: {
    },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    placeholder: 'Example text',
    value: '12345678',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    placeholder: 'Example text',
    value: '12345678',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
