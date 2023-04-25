import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Title text text text text',
    text: 'Text text text text text',
};

export const onlyTitle = Template.bind({});
onlyTitle.args = {
    title: 'Title text text text text',
};

export const onlyText = Template.bind({});
onlyText.args = {
    text: 'Text text text text text',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'Title text text text text',
    text: 'Text text text text text',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Error = Template.bind({});
Error.args = {
    title: 'Title text text text text',
    text: 'Text text text text text',
    theme: TextTheme.ERROR,
};

export const ErrorDark = Template.bind({});
ErrorDark.args = {
    title: 'Title text text text text',
    text: 'Text text text text text',
    theme: TextTheme.ERROR,
};
ErrorDark.decorators = [ThemeDecorator(Theme.DARK)];
