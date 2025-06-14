import { Box } from '@components/common/ui-kit';
import React from 'react';
import styles from './styles.module.less';
import { DetailItem } from './components/DetailItem';
import { EEmploymentOption } from '@src/enums';
import { employmentOptionMap } from '@constants/dictionaries';

interface IProps {
    birthDate: string;
    citizenship?: string | null;
    cityName: string;
    country: string;
    employmentOption: EEmploymentOption | null;
}

export const CandidateIdentity: React.FC<IProps> = ({
    birthDate,
    citizenship,
    cityName,
    country,
    employmentOption,
}) => {
    const residence = `${country}, ${cityName}`;

    return (
        <Box className={styles.container}>
            <DetailItem title="Проживает" description={residence} />
            {citizenship && <DetailItem title="Гражданство" description={citizenship} />}
            <DetailItem title="Дата рождения" description={birthDate} />
            {employmentOption && (
                <DetailItem title="Тип оформления" description={employmentOptionMap[employmentOption]} />
            )}
        </Box>
    );
};
