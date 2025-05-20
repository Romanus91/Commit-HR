import { api } from './api';

const baseUrl = '/candidates';

export const candidatesApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getCandidates: builder.query<unknown, void>({
            query: () => ({
                url: `${baseUrl}`,
            }),
        }),
    }),
});

export const { useGetCandidatesQuery } = candidatesApi;
