import { EVacancyStatus, EWorkFormat } from '@src/enums/vacancy';

export interface IVacancy {
    id: string;
    employerId: string;
    title: string;
    workFormat: EWorkFormat;
    maxPositions: number;
    deadline: string;
    status: EVacancyStatus;
    createdAt: string;
    updatedAt: string;
    candidatesCount: number;
}
