import { EEmploymentType, EVacancyStatus, EWorkFormat, ECandidateGrade } from '@src/enums';

export interface IVacancyDetailDTO {
    id: string;
    employer: IUserShortDTO;
    city: ICityShortDTO;
    department: IDepartmentShortDTO;
    employmentType: EEmploymentType;
    title: string;
    salaryFrom: number;
    salaryTo: number;
    currencyCode: string;
    description: string;
    responsibilities: string;
    experience: string;
    grade: ECandidateGrade;
    workFormat: EWorkFormat;
    maxPositions: number;
    candidatesCount: number;
    deadline: string;
    status: EVacancyStatus;
    createdAt: string;
    updatedAt: string;
    recruiters: IUserShortDTO[];
    candidates: ICandidateShortDTO[];
}

export interface IUserShortDTO {
    id: string;
    firstName: string;
    lastName: string;
    patronymic: string | null;
    email: string;
    phoneNumber: string;
    telegram: string | null;
    role: string;
}

export interface ICityShortDTO {
    id: string;
    name: string;
}

export interface IDepartmentShortDTO {
    id: string;
    name: string;
}

export interface ICandidateShortDTO {
    id: string;
    fullName: string;
    email: string;
    phone: string;
}
