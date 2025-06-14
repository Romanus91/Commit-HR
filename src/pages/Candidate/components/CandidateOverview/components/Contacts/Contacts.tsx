import { Box, Icon, Typography } from '@components/common/ui-kit';
import { EColor, EIconName, EIconSize } from '@src/enums';
import React from 'react';
import styles from './styles.module.less';
import { Link } from '@tanstack/react-router';
import { formatPhoneNumber } from '@utils/formatPhoneNumber';
import { checkAtSymbolStart } from '@utils/checkAtSymbolStart';

interface IProps {
    email?: string;
    telegram?: string | null;
    phoneNumber?: string;
}

export const Contacts: React.FC<IProps> = ({ email, telegram, phoneNumber }) => {
    const hasAtTelegramSymbolPrefix = checkAtSymbolStart(telegram ?? '');

    return (
        <Box className={styles.container}>
            {phoneNumber && (
                <Link to={`tel:${phoneNumber}`} target="_blank" rel="noopener noreferrer">
                    <Box className={styles.contactBox}>
                        <Icon name={EIconName.PHONE} color={EColor.PURPLE} size={EIconSize.SMALL} />
                        <Typography className={styles.contact} tag="span">
                            {formatPhoneNumber(phoneNumber)}
                        </Typography>
                    </Box>
                </Link>
            )}
            {phoneNumber && (
                <Link to={`mailto:${email}`}>
                    <Box className={styles.contactBox}>
                        <Icon name={EIconName.EMAIL} color={EColor.PURPLE} size={EIconSize.SMALL} />
                        <Typography className={styles.contact} tag="span">
                            {email}
                        </Typography>
                    </Box>
                </Link>
            )}
            {telegram && (
                <Link to={`https://t.me/${telegram}`} target="_blank" rel="noopener noreferrer">
                    <Box className={styles.contactBox}>
                        <Icon name={EIconName.TELEGRAM} color={EColor.PURPLE} size={EIconSize.SMALL} />
                        <Typography className={styles.contact} tag="span">
                            {hasAtTelegramSymbolPrefix ? telegram : `@${telegram}`}
                        </Typography>
                    </Box>
                </Link>
            )}
        </Box>
    );
};
