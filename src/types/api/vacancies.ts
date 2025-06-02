import { EVacancyStatus, EWorkFormat } from '@src/enums/vacancy';
import { IPagination } from '@src/types/api';

export interface IVacanciesDTO {
    vacancies: IVacancy[];
    pagination: IPagination;
}

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
    candidatesCount: number | null;
}
