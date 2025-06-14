/**
 * Функция для ппроверки символа "@" в начале строки.
 */
export const checkAtSymbolStart = (input: string): boolean => {
    return input.startsWith('@');
};
