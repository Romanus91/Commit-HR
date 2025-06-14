import { Box, Button, Icon, Typography } from '@components/common/ui-kit';
import React from 'react';
import styles from './styles.module.less';
import { EColor, EIconName, EIconSize } from '@src/enums';

export const ActionButtons: React.FC = () => {
    const bgBtnColor = EColor.SOFT_GRAY;
    const buttonStyles = {
        backgroundColor: bgBtnColor,
        width: '48px',
        height: '48px',
        minWidth: 'unset',
        padding: 'unset',
        borderRadius: '12px',
    };

    return (
        <Box className={styles.container}>
            <Button
                startIcon={<Icon name={EIconName.EDIT_FILE} color={EColor.PURPLE} size={EIconSize.SMALL} />}
                className={styles.editBtn}
                sx={{ backgroundColor: bgBtnColor, borderRadius: '12px' }}
            >
                <Typography className={styles.buttonText} tag="span">
                    Редактировать
                </Typography>
            </Button>
            <Button className={styles.buttonIcon} sx={buttonStyles}>
                <Icon name={EIconName.GARBAGE} color={EColor.PURPLE} size={EIconSize.SMALL} />
            </Button>
            <Button className={styles.buttonIcon} sx={buttonStyles}>
                <Icon name={EIconName.DOTS_VERTICAL} color={EColor.PURPLE} size={EIconSize.SMALL} />
            </Button>
        </Box>
    );
};
