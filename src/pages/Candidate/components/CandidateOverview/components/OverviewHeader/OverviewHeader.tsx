import { Avatar, Box, Typography } from '@components/common/ui-kit';
import React from 'react';
import styles from './styles.module.less';
import { ICandidateDetailsDTO } from '@src/types/api';
import { getFullName } from '@utils/getFullName';
import { formatMoney } from '@utils/formatMoney';

interface IProps {
    candidateData: ICandidateDetailsDTO;
}

export const OverviewHeader: React.FC<IProps> = ({ candidateData }) => {
    const { firstName, lastName, desiredPosition, expectedSalary } = candidateData;
    const fullName = getFullName(candidateData);

    return (
        <Box className={styles.container}>
            <Box className={styles.userInfo}>
                <Avatar name={`${firstName} ${lastName}`} />
                <Box className={styles.user}>
                    <Typography tag="h3" className={styles.name}>
                        {fullName}
                    </Typography>
                    <Typography className={styles.vacancy}>{desiredPosition}</Typography>
                </Box>
            </Box>
            <Box className={styles.salaryBox}>
                <Typography className={styles.salary}>{formatMoney(expectedSalary)}</Typography>
                <Typography className={styles.salaryText}>Желаемая зарплата</Typography>
            </Box>
        </Box>
    );
};
