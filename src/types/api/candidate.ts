import { ECandidateGrade, EEmploymentOption, EEmploymentType, EGeneralStatus } from '@src/enums';

export interface ICandidateDetailsDTO {
    id: string;
    lastName: string;
    firstName: string;
    patronymic: string | null;
    birthDate: string;
    phoneNumber: string;
    email: string;
    telegram: string | null;
    country: ICountry;
    city: ICity;
    citizenship: string | null;
    desiredPosition: string;
    grade: ECandidateGrade | null;
    expectedSalary: number | null;
    currencyCode: string | null;
    employmentType: EEmploymentType | null;
    /** Тип varchar(50), например 09:00-13:00. */
    workSchedule: string | null;
    workFormat: string | null;
    employmentOption: EEmploymentOption | null;
    recruiter: ICandidateRecruiter;
    screeningResults: string | null;
    /** Канал привлечения. */
    recruitmentSource: string | null;
    /** Формат даты ISO-8601, например 2025-05-28. */
    startDate: string | null;
    generalStatus: EGeneralStatus;
    vacancies: ICandidateVacancy[];
    /** Таймштамп вида "2023-10-01 10:00:00". */
    createdAt: string;
    /** Таймштамп вида "2023-10-01 10:00:00". */
    updatedAt: string;
}

export interface ICountry {
    id: number;
    name: string;
}

export interface ICity {
    id: string;
    name: string;
}

export interface ICandidateRecruiter {
    id: string;
    firstName: string;
    lastName: string;
    patronymic: string;
    email: string;
    phoneNumber: string;
    telegram: string;
    role: string;
}

export interface ICandidateVacancy {
    candidateVacancyId: string;
    title: string;
    status: string;
}
