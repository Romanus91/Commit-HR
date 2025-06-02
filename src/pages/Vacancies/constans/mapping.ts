import { EVacancyStatus, EWorkFormat } from '@src/enums';

export const workFormatMap: Record<EWorkFormat, string> = {
    [EWorkFormat.REMOTE]: 'Удаленная работа',
    [EWorkFormat.OFFICE]: 'Офис',
    [EWorkFormat.HYBRID]: 'Гибридный',
};

export const vacancyStatusMap: Record<EVacancyStatus, string> = {
    [EVacancyStatus.OPEN]: 'Открыта',
    [EVacancyStatus.CLOSED]: 'Закрыта',
};
