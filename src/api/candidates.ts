import { ICandidatesDTO } from '@src/types';
import { api } from './api';
import { type EDocumentType } from '@src/enums';

const baseUrl = '/candidates';

export const candidatesApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getCandidates: builder.query<ICandidatesDTO, { documentType: EDocumentType }>({
            query: ({ documentType }) => ({
                url: `${baseUrl}?documentType=${documentType}`,
            }),
        }),
    }),
});

export const { useGetCandidatesQuery } = candidatesApi;
