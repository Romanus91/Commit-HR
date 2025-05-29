import dayjs from 'dayjs';

/** Форматирование даты из "2025-05-28T20:08:48.423Z" в "28 мая 23:08" */
export const formateDate = (date: string): string => {
    return dayjs(date).format('D MMMM HH:mm');
};
