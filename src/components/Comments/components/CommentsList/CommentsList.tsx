import { Box } from '@components/common/ui-kit';
import { ICommentDTO } from '@src/types/api';
import React from 'react';
import styles from './styles.module.less';
import { CommentListItem } from './components/CommentListItem';

interface IProps {
    commentsData?: ICommentDTO[];
}

export const CommentsList: React.FC<IProps> = ({ commentsData }) => {
    if (!commentsData || !commentsData?.length) {
        return null;
    }

    return (
        <Box className={styles.container}>
            {commentsData.map((item) => (
                <CommentListItem key={item.id} comment={item} />
            ))}
        </Box>
    );
};
