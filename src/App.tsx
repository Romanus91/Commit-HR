import React from 'react';
import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { RouterProvider } from '@tanstack/react-router';
import { router } from './router';
import { ThemeContextProvider } from './context/theme';
import { store } from '@store/store';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.locale('ru');
dayjs.extend(utc);
dayjs.extend(timezone);

export const App: React.FC = () => {
    return (
        <StrictMode>
            <Provider store={store}>
                <ThemeContextProvider>
                    <RouterProvider router={router} />
                </ThemeContextProvider>
            </Provider>
        </StrictMode>
    );
};
