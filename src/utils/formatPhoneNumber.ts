/**
 * Форматирование телефона из +79991123344 в +7 999 112 33 44.
 */
export const formatPhoneNumber = (phone: string): string => {
    const cleaned = phone.replace(/[^+\d]/g, '');

    if (!cleaned.match(/^\+7\d{10}$/)) {
        return phone;
    }

    return cleaned.replace(/(\+\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/, '$1 $2 $3 $4 $5');
};
