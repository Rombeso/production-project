import { DeepPartial } from '@reduxjs/toolkit';
import { LoginSchema } from 'features/AuthByUserName';
import { loginAction, loginReducer } from 'features/AuthByUserName/model/sclice/loginSlice';
import { StateSchema } from 'app/providers/StoreProvider';

describe('loginSlice.test', () => {
    test('test set username', () => {
        const state: DeepPartial<LoginSchema> = { username: '123' };
        expect(loginReducer(
            state as LoginSchema,
            loginAction.setUsername('234234234'),
        )).toEqual({ username: '234234234' });
    });
    test('test set password', () => {
        const state: DeepPartial<LoginSchema> = { password: '123' };
        expect(loginReducer(
            state as LoginSchema,
            loginAction.setPassword('234234234'),
        )).toEqual({ password: '234234234' });
    });
    test('test set isLoading', () => {

    });
    test('test set error', () => {

    });
    test('test set username', () => {

    });
});
