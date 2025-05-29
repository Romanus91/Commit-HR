import { EGeneralStatus } from '@src/enums';

export const generalStatusMap: Record<EGeneralStatus, string> = {
    [EGeneralStatus.NEW]: 'Новый',
    [EGeneralStatus.ACTIVE]: 'В поиске',
    [EGeneralStatus.IN_RESERVE]: 'В резерве',
    [EGeneralStatus.REJECTED]: 'Отклонен',
    [EGeneralStatus.WORKING]: 'В работе',
};
