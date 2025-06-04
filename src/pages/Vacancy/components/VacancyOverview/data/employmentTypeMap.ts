import { EEmploymentType } from '@src/enums';

export const employmentTypeMap: Record<EEmploymentType, string> = {
    [EEmploymentType.FULL_TIME]: 'Полная занятость',
    [EEmploymentType.PART_TIME]: 'Частичная занятость',
    [EEmploymentType.PROJECT_BASED]: 'Проектная работа',
};
