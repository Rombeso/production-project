import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import i18nForTests from 'shared/config/i18n/i18nForTests';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';

export interface renderWithRouterOptions {
    route: string;
}

export const renderWithRouter = (component: ReactNode, options: renderWithRouterOptions) => {
    const { route } = options;
    render(
        <MemoryRouter initialEntries={[]}>
            <I18nextProvider i18n={i18nForTests}>
                {component}
            </I18nextProvider>
        </MemoryRouter>,
    );
};
