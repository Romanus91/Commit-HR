import {
    ECandidateGrade,
    EEmploymentOption,
    EEmploymentType,
    EGeneralStatus,
    ERecruiterRole,
    EWorkFormat,
} from '@src/enums';

export interface ICandidateDetailsDTO {
    id: string;
    lastName: string;
    firstName: string;
    patronymic: string | null;
    /** Формат даты ISO-8601, например 2025-05-28. */
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
    workFormat: EWorkFormat | null;
    employmentOption: EEmploymentOption | null;
    recruiter: ICandidateRecruiter;
    screeningResults: string | null;
    /** Канал привлечения. */
    recruitmentSource: string | null;
    /** Формат даты ISO-8601, например 2025-05-28. */
    startDate: string | null;
    generalStatus: EGeneralStatus;
    vacancies: ICandidateVacancy[];
    /** Таймштамп формата ISO-8601 "2025-05-28T20:08:48.423Z". */
    createdAt: string;
    /** Таймштамп формата ISO-8601 "2025-05-28T20:08:48.423Z". */
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
    role: ERecruiterRole;
}

export interface ICandidateVacancy {
    candidateVacancyId: string;
    title: string;
    status: string;
}
