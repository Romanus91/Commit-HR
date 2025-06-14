/**
 * Преобразует число в строку с разделителями, например 1000000 -> 1 000 000.
 */
export const formatMoney = (number?: number | null): string => {
    if (!number) return '';

    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
};
