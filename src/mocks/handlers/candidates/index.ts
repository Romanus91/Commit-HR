import { http, HttpResponse } from 'msw';
import candidatesData from './responses/candidatesData';
import { API_URL } from '@constants/environment';

export const candidatesHandlers = [
    http.get(`${API_URL}/candidates`, () => {
        return HttpResponse.json(candidatesData, { status: 200 });
    }),
    http.get(`${API_URL}/candidates/:id`, () => {
        return HttpResponse.json(candidatesData, { status: 200 });
    }),
];
