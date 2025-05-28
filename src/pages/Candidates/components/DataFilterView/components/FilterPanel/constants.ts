import { ECandidateGrade, EWorkFormat } from '@src/enums';
import { IFilterFormValues } from './types';

export const CANDIDATE_GROUP_FILTERS = [
    {
        name: 'grade' as keyof IFilterFormValues,
        title: 'Уровень кандидата',
        options: [
            { value: ECandidateGrade.JUNIOR, label: 'Джун' },
            { value: ECandidateGrade.MIDDLE, label: 'Миддл' },
            { value: ECandidateGrade.SENIOR, label: 'Сеньор' },
            { value: 'Teamlead', label: 'Тимлид' },
        ],
    },
    {
        name: 'workFormat' as keyof IFilterFormValues,
        title: 'Формат работы',
        options: [
            { value: EWorkFormat.REMOTE, label: 'Удаленная работа' },
            { value: EWorkFormat.OFFICE, label: 'Офис' },
            { value: EWorkFormat.HYBRID, label: 'Гибкий график (гибрид)' },
        ],
    },
];
