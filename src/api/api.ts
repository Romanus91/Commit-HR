import { API_URL } from '@constants/environment';
import { getKeycloakToken } from '@context/auth/KeycloakProvider';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = import.meta.env.VITE_DEV ? './api' : API_URL;

export const api = createApi({
    reducerPath: 'api',
    tagTypes: [],
    baseQuery: fetchBaseQuery({
        credentials: 'include',
        mode: 'cors',
        baseUrl,
        prepareHeaders: (headers) => {
            if (!import.meta.env.VITE_MOCK) {
                const token = getKeycloakToken();

                if (token) {
                    headers.set('Authorization', `Bearer ${token}`);
                }
            } else {
                headers.set('Authorization', 'Bearer mock-token-for-development');
            }
        },
    }),
    endpoints: () => ({}),
});
