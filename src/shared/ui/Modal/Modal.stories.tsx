import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const ModalLight = Template.bind({});
ModalLight.args = {
    isOpen: true,
    children: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem\n'
        + 'ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum\n'
        + 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum',
};

export const ModalDark = Template.bind({});
ModalDark.args = {
    isOpen: true,
    children: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem\n'
        + 'ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum\n'
        + 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum',
};
ModalDark.decorators = [ThemeDecorator(Theme.DARK)];
