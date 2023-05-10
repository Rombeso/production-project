import { StateSchema } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername.test', () => {
    test('should return Username: Vasya', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: 'Vasya',
            },
        };
        expect(getLoginUsername(state as StateSchema)).toEqual('Vasya');
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginUsername(state as StateSchema)).toEqual('');
    });
});
