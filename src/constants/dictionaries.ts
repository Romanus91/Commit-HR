import { ECandidateGrade, EEmploymentOption, EEmploymentType, EWorkFormat } from '@src/enums';

export const workFormatMap: Record<EWorkFormat, string> = {
    [EWorkFormat.REMOTE]: 'Удаленно',
    [EWorkFormat.HYBRID]: 'Гибрид',
    [EWorkFormat.OFFICE]: 'Офис',
};

export const employmentTypeMap: Record<EEmploymentType, string> = {
    [EEmploymentType.FULL_TIME]: 'Полная занятость',
    [EEmploymentType.PART_TIME]: 'Частичная занятость',
    [EEmploymentType.PROJECT_BASED]: 'Проектная занятость',
};

export const gradeMap: Record<ECandidateGrade, string> = {
    [ECandidateGrade.JUNIOR]: 'Junior',
    [ECandidateGrade.MIDDLE]: 'Middle',
    [ECandidateGrade.SENIOR]: 'Senior',
};

export const employmentOptionMap: Record<EEmploymentOption, string> = {
    [EEmploymentOption.GPH]: 'Договор гражданско-правового характера',
    [EEmploymentOption.IP]: 'Индивидуальный предприниматель',
    [EEmploymentOption.SZ]: 'Самозанятый',
    [EEmploymentOption.TK]: 'Трудовая книжка',
};
