import { http, HttpResponse } from 'msw';
import candidateData from './responses/candidateData';
import candidateCommentsData from './responses/candidateComments';
import candidatesData from './responses/candidatesData';
import { API_URL } from '@constants/environment';

export const candidatesHandlers = [
    http.get(`${API_URL}/candidates`, () => {
        return HttpResponse.json(candidatesData, { status: 200 });
    }),
    http.get(`${API_URL}/candidates/:id/comments`, () => {
        return HttpResponse.json(candidateCommentsData, { status: 200 });
    }),
    http.get(`${API_URL}/candidates/:id`, () => {
        return HttpResponse.json(candidateData, { status: 200 });
    }),
    http.post(`${API_URL}/candidates/:id/comments`, async ({ request }) => {
        const body = await request.json();
        const comment = (body as { comment?: string }).comment || 'string';

        const responseBody = {
            id: '3fa85f64-5717-4562-b3fc-2c963f66af33',
            candidateId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
            vacancyId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
            userId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
            authorName: 'string',
            comment,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        };

        return HttpResponse.json(responseBody, { status: 201 });
    }),
];
