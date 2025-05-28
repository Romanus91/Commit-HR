interface INameParts {
    firstName: string | null;
    patronymic: string | null;
    lastName: string | null;
}

/** Формирует полное имя из частей. */
export const getFullName = ({ firstName, patronymic, lastName }: INameParts): string => {
    return [firstName, patronymic, lastName]
        .filter((part) => part != null)
        .join(' ')
        .trim();
};
