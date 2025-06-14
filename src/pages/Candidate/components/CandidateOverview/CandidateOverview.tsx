import React from 'react';
import { Box } from '@components/common/ui-kit';
import styles from './styles.module.less';
import { Comments, ECommentApiEndpoint } from '@components/Comments';
import { ICandidateDetailsDTO, ICommentDTO } from '@src/types/api';
import { OverviewHeader } from './components/OverviewHeader';
import { Contacts } from './components/Contacts';
import { WorkDetails } from './components/WorkDetails';
import { CandidateIdentity } from './components/CandidateIdentity';
import dayjs from 'dayjs';

interface IProps {
    candidateId: string;
    candidateData: ICandidateDetailsDTO;
    commentsData?: ICommentDTO[];
}

export const CandidateOverview: React.FC<IProps> = ({ candidateId, candidateData, commentsData }) => {
    const {
        birthDate,
        city,
        citizenship,
        country,
        grade,
        email,
        telegram,
        phoneNumber,
        employmentOption,
        employmentType,
        workFormat,
        workSchedule,
    } = candidateData;
    const hasContacts = email || telegram || phoneNumber;
    const formattedBirthDate = dayjs(birthDate).format('DD.MM.YYYY');

    return (
        <Box className={styles.container}>
            <Box className={styles.groups}>
                <OverviewHeader candidateData={candidateData} />
                {hasContacts && <Contacts email={email} telegram={telegram} phoneNumber={phoneNumber} />}
                <WorkDetails
                    grade={grade}
                    employmentType={employmentType}
                    workFormat={workFormat}
                    workSchedule={workSchedule}
                />
                <CandidateIdentity
                    birthDate={formattedBirthDate}
                    citizenship={citizenship}
                    cityName={city.name}
                    country={country.name}
                    employmentOption={employmentOption}
                />
            </Box>
            <Box>
                <Comments
                    commentsData={commentsData}
                    candidateId={candidateId}
                    endpoint={ECommentApiEndpoint.CANDIDATE}
                />
            </Box>
        </Box>
    );
};
