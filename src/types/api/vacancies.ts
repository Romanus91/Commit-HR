import { EVacancyStatus, EWorkFormat } from '@src/enums/vacancy';
import { IPagination } from '@src/types/api';

// Интерфейс для ответа API вакансий
export interface IVacanciesDTO {
    vacancies: IVacancy[];
    pagination: IPagination;
}

// Существующий интерфейс IVacancy (уже есть в проекте)
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
