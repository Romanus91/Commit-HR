export const getInitials = (name?: string): string => {
    if (!name) return '';
    const names = name.trim().split(' ');

    return names
        .slice(0, 2)
        .map((n) => n[0]?.toUpperCase())
        .filter(Boolean)
        .join('');
};
