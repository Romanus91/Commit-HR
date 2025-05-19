import React from 'react';
import { Box, Popup, Typography } from '@components/common/ui-kit';
import styles from './styles.module.less';

interface IProps {
    anchor: HTMLElement | null;
    id: string;
    isOpen: boolean;
    onClose: () => void;
}

export const AddActionsPopup: React.FC<IProps> = ({ id, isOpen, onClose, anchor }) => {
    return (
        <Popup id={id} isOpen={isOpen} anchor={anchor} onClose={onClose}>
            <Box className={styles.box}>
                <ul>
                    <li className={styles.item}>
                        <Typography className={styles.text}>Добавить вакансию</Typography>
                    </li>
                    <li className={styles.item}>
                        <Typography className={styles.text}>Добавить кандидата</Typography>
                    </li>
                </ul>
            </Box>
        </Popup>
    );
};
