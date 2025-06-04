import { ECandidateGrade, EWorkFormat } from '@src/enums';

export interface IFilterFormValues {
    grade: ECandidateGrade | null;
    workFormat: EWorkFormat | null;
}
