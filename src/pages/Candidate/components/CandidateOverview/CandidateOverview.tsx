import React from 'react';
import { Box } from '@components/common/ui-kit';
import styles from './styles.module.less';
import { Comments, ECommentApiEndpoint } from '@components/Comments';
import { ICommentDTO } from '@src/types/api';

interface IProps {
    candidateId: string;
    commentsData?: ICommentDTO[];
}

export const CandidateOverview: React.FC<IProps> = ({ candidateId, commentsData }) => {
    return (
        <Box className={styles.container}>
            <Box>CandidateOverview</Box>
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
