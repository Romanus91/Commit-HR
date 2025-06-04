import { IVacanciesDTO, IVacancyDetailDTO } from '@src/types';
// import { IVacancyDetailDTO } from '@src/types/api/vacancy';
import { api } from './api';

const baseUrl = '/vacancies';

export const vacanciesApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getVacancies: builder.query<IVacanciesDTO, void>({
            query: () => ({
                url: baseUrl,
            }),
        }),
        getVacancy: builder.query<IVacancyDetailDTO, string>({
            query: (id: string) => ({
                url: `${baseUrl}/${id}`,
            }),
        }),
    }),
});

export const { useGetVacanciesQuery, useGetVacancyQuery } = vacanciesApi;
