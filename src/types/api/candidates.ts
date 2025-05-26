import { ECandidateGrade, EDocumentType, EGeneralStatus } from '@src/enums/candidate';
import { IVacancy, IPagination } from '@src/types/api';

export interface ICandidatesDTO {
    candidates: ICandidate[];
    pagination: IPagination;
}

export interface ICandidate {
    id: string;
    lastName: string;
    firstName: string;
    patronymic: string | null;
    grade: ECandidateGrade | null;
    generalStatus: EGeneralStatus;
    position: IDesiredPosition | null;
    city: ICityShort;
    vacancies: IVacancy[] | null;
    files: IFile[] | null;
}

export interface IDesiredPosition {
    id: string;
    name: string;
}

export interface ICityShort {
    uuid: string | null;
    name: string;
}

export interface IFile {
    fileId: string;
    minioId: string;
    fileName: string;
}

export interface ICandidatesQueryParams {
    status?: EGeneralStatus;
    vacancyId?: string;
    search?: string;
    documentType: EDocumentType;
    page?: number;
    size?: number;
    sort?: string[];
}
