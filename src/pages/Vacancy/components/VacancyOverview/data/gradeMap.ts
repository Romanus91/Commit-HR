import { ECandidateGrade } from '@src/enums';

export const gradeMap: Record<ECandidateGrade, string> = {
    [ECandidateGrade.JUNIOR]: 'Junior',
    [ECandidateGrade.MIDDLE]: 'Middle',
    [ECandidateGrade.SENIOR]: 'Senior',
};
