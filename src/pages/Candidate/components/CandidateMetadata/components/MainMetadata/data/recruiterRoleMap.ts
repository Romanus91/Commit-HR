import { ERecruiterRole } from '@src/enums';

export const recruiterRoleMap: Record<ERecruiterRole, string> = {
    [ERecruiterRole.RECRUITER]: 'HR',
    [ERecruiterRole.EMPLOYER]: 'Сотрудник',
    [ERecruiterRole.ADMIN]: 'Админ',
};
