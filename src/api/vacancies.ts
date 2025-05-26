// src/api/vacancies.ts
import { IVacanciesDTO } from '@src/types';
import { api } from './api';

const baseUrl = '/vacancies';

export const vacanciesApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getVacancies: builder.query<IVacanciesDTO, void>({
            query: () => ({
                url: baseUrl,
            }),
        }),
    }),
});

export const { useGetVacanciesQuery } = vacanciesApi;
