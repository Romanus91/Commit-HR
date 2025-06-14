import { Box } from '@components/common/ui-kit';
import React from 'react';
import styles from './styles.module.less';
import { ECandidateGrade, EEmploymentType, EWorkFormat } from '@src/enums';
import { WorkDetail } from './components/WorkDetail';
import { employmentTypeMap, gradeMap, workFormatMap } from '@constants/dictionaries';

interface IProps {
    grade: ECandidateGrade | null;
    employmentType: EEmploymentType | null;
    workFormat: EWorkFormat | null;
    workSchedule: string | null;
}

export const WorkDetails: React.FC<IProps> = ({ grade, employmentType, workFormat, workSchedule }) => {
    return (
        <Box className={styles.container}>
            {workFormat && <WorkDetail title="Формат работы" description={workFormatMap[workFormat]} />}
            {employmentType && <WorkDetail title="Тип занятости" description={employmentTypeMap[employmentType]} />}
            {grade && <WorkDetail title="Грейд" description={gradeMap[grade]} />}
            {workSchedule && <WorkDetail title="График работы" description={workSchedule} />}
        </Box>
    );
};
