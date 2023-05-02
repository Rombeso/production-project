import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import LoginForm from './LoginForm';

export default {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {
    },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
Primary.decorators = [StoreDecorator({
    loginForm: { username: '123', password: '123' },
})];

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
};
PrimaryDark.decorators = [];
PrimaryDark.decorators.push(StoreDecorator({
    loginForm: { username: '123', password: '123' },
}));
PrimaryDark.decorators.push(ThemeDecorator(Theme.DARK));

export const withError = Template.bind({});
withError.args = {
};
withError.decorators = [StoreDecorator({
    loginForm: { username: '123', password: '123', error: 'ERROR error' },
})];

export const Loading = Template.bind({});
Loading.args = {
};
Loading.decorators = [StoreDecorator({
    loginForm: { isLoading: true },
})];
