import { ICandidateDetailsDTO, ICandidatesDTO, ICandidatesQueryParams } from '@src/types';
import { api } from './api';

const baseUrl = '/candidates';

export const candidatesApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getCandidate: builder.query<ICandidateDetailsDTO, string>({
            query: (id: string) => ({
                url: `${baseUrl}/${id}`,
            }),
        }),
        getCandidates: builder.query<ICandidatesDTO, ICandidatesQueryParams>({
            query: (params) => ({
                url: `${baseUrl}`,
                params,
            }),
        }),
    }),
});

export const { useGetCandidateQuery, useGetCandidatesQuery, useLazyGetCandidatesQuery } = candidatesApi;
