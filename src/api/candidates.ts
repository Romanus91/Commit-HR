import { ICandidateDetailsDTO, ICandidatesDTO, ICandidatesQueryParams, ICommentDTO } from '@src/types';
import { api } from './api';

const baseUrl = '/candidates';

export const candidatesApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getCandidate: builder.query<ICandidateDetailsDTO, string>({
            query: (id: string) => ({
                url: `${baseUrl}/${id}`,
            }),
        }),
        getCandidateComments: builder.query<ICommentDTO[], string>({
            query: (id: string) => ({
                url: `${baseUrl}/${id}/comments`,
            }),
        }),
        createCandidateComment: builder.mutation<ICommentDTO, { candidateId: string; comment: string }>({
            query: ({ candidateId, comment }) => ({
                url: `${baseUrl}/${candidateId}/comments`,
                method: 'POST',
                body: { comment },
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

export const {
    useGetCandidateQuery,
    useGetCandidateCommentsQuery,
    useCreateCandidateCommentMutation,
    useGetCandidatesQuery,
    useLazyGetCandidatesQuery,
} = candidatesApi;
