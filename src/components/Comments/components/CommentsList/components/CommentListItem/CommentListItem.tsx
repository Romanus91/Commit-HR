import { Box, Typography } from '@components/common/ui-kit';
import { ICommentDTO } from '@src/types/api';
import React from 'react';
import styles from './styles.module.less';
import dayjs from 'dayjs';

interface IProps {
    comment: ICommentDTO;
}

export const CommentListItem: React.FC<IProps> = ({ comment }) => {
    const { comment: message, authorName, createdAt } = comment;
    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone ?? 'Europe/Moscow';
    const formattedData = dayjs.utc(createdAt).tz(userTimeZone).format('DD.MM.YYYY HH:mm');
    const metaData = `${authorName} ${formattedData}`;

    return (
        <Box className={styles.container}>
            <Typography className={styles.message}>{message}</Typography>
            <Typography className={styles.meta}>{metaData}</Typography>
        </Box>
    );
};
