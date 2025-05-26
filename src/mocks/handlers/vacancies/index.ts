import { http, HttpResponse } from 'msw';
import vacanciesData from './responses/vacanciesData';
import { API_URL } from '@constants/environment';

export const vacanciesHandlers = [
    http.get(`${API_URL}/vacancies`, () => {
        return HttpResponse.json(vacanciesData, { status: 200 });
    }),
];
