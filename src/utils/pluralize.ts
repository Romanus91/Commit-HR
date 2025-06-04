export const pluralizeCandidates = (count: number): string => {
    if (count % 10 === 1 && count % 100 !== 11) {
        return `${count} кандидат`;
    } else if (count % 10 >= 2 && count % 10 <= 4 && (count % 100 < 10 || count % 100 >= 20)) {
        return `${count} кандидата`;
    } else {
        return `${count} кандидатов`;
    }
};

export const pluralizeDays = (count: number): string => {
    const absCount = Math.abs(count);
    const lastDigit = absCount % 10;
    const lastTwoDigits = absCount % 100;

    if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
        return 'дней';
    }

    if (lastDigit === 1) {
        return 'день';
    }

    if (lastDigit >= 2 && lastDigit <= 4) {
        return 'дня';
    }

    return 'дней';
};
