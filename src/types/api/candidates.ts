import { ECandidateGrade, EGeneralStatus } from '@src/enums/candidate';
import { IVacancy, IPagination } from '@src/types/api';

export interface ICandidatesDTO {
    candidates: ICandidate[];
    pagination: IPagination;
}

export interface ICandidate {
    id: string;
    lastName: string;
    firstName: string;
    patronymic: string;
    grade: ECandidateGrade;
    generalStatus: EGeneralStatus;
    position: IDesiredPosition;
    city: ICityShort;
    vacancies: IVacancy[];
    files: IFile[];
}

export interface IDesiredPosition {
    id: string;
    name: string;
}

export interface ICityShort {
    uuid: string;
    name: string;
}

export interface IFile {
    fileId: string;
    minioId: string;
    fileName: string;
}
