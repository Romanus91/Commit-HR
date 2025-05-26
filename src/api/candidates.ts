import { ICandidatesDTO, ICandidatesQueryParams } from '@src/types';
import { api } from './api';

const baseUrl = '/candidates';

export const candidatesApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getCandidates: builder.query<ICandidatesDTO, ICandidatesQueryParams>({
            query: (params) => ({
                url: `${baseUrl}`,
                params,
            }),
        }),
    }),
});

export const { useGetCandidatesQuery, useLazyGetCandidatesQuery } = candidatesApi;
