import { ECandidateGrade, EGeneralStatus, EVacancyStatus, EWorkFormat } from '@src/enums';

export default {
    candidates: [
        {
            id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
            lastName: 'Комызякин',
            firstName: 'Петр',
            patronymic: 'Олегович',
            grade: ECandidateGrade.JUNIOR,
            generalStatus: EGeneralStatus.NEW,
            position: {
                id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
                name: 'string',
            },
            city: {
                uuid: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
                name: 'string',
            },
            vacancies: [
                {
                    id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
                    employerId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
                    title: 'string',
                    workFormat: EWorkFormat.REMOTE,
                    maxPositions: 0,
                    deadline: '2025-05-20T09:21:39.178Z',
                    status: EVacancyStatus.OPEN,
                    createdAt: '2025-05-20T09:21:39.178Z',
                    updatedAt: '2025-05-20T09:21:39.182Z',
                    candidatesCount: 0,
                },
            ],
            files: [
                {
                    fileId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
                    minioId: 'string',
                    fileName: 'string',
                },
            ],
        },
    ],
    pagination: {
        page: 1,
        totalPages: 1,
    },
};
