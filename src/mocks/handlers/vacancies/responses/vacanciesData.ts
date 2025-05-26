// src/mocks/handlers/vacancies/responses/vacanciesData.ts
import { EVacancyStatus, EWorkFormat } from '@src/enums';

export default {
    vacancies: [
        {
            id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
            employerId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
            title: 'Frontend Developer (React)',
            workFormat: EWorkFormat.REMOTE,
            maxPositions: 2,
            deadline: '2025-06-26T12:13:47.537Z',
            status: EVacancyStatus.OPEN,
            createdAt: '2025-05-20T09:21:39.178Z',
            updatedAt: '2025-05-26T12:13:47.537Z',
            candidatesCount: 5,
        },
        {
            id: '4fa85f64-5717-4562-b3fc-2c963f66afa7',
            employerId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
            title: 'Backend Developer (Node.js)',
            workFormat: EWorkFormat.HYBRID,
            maxPositions: 1,
            deadline: '2025-07-15T12:13:47.537Z',
            status: EVacancyStatus.OPEN,
            createdAt: '2025-05-21T09:21:39.178Z',
            updatedAt: '2025-05-26T12:13:47.537Z',
            candidatesCount: 3,
        },
        {
            id: '5fa85f64-5717-4562-b3fc-2c963f66afa8',
            employerId: '4fa85f64-5717-4562-b3fc-2c963f66afa7',
            title: 'UI/UX Designer',
            workFormat: EWorkFormat.OFFICE,
            maxPositions: 1,
            deadline: '2025-06-10T12:13:47.537Z',
            status: EVacancyStatus.CLOSED,
            createdAt: '2025-05-18T09:21:39.178Z',
            updatedAt: '2025-05-25T12:13:47.537Z',
            candidatesCount: 8,
        },
    ],
    pagination: {
        page: 1,
        totalPages: 1,
    },
};
