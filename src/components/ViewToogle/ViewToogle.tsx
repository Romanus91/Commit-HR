import React from 'react';
import { Box, Icon, IconButton } from '@components/common/ui-kit';
import { EColor, EIconName, EIconSize } from '@src/enums';
import styles from './styles.module.less';
import { EViewType } from './enums';

interface IProps {
    onChange: (value: EViewType) => void;
    selectedValue: EViewType;
}

/**
 * Компонент для отображения режима просмотра кандидатов/вакансий.
 */
export const ViewToogle: React.FC<IProps> = ({ onChange, selectedValue }) => {
    const getIconColor = (viewType: EViewType): EColor => {
        return selectedValue === viewType ? EColor.PURPLE : EColor.DARK_GRAY;
    };

    return (
        <Box className={styles.container}>
            <IconButton disableRipple isSquare onClick={() => onChange(EViewType.GRID)}>
                <Icon name={EIconName.GRID} size={EIconSize.SMALL} color={getIconColor(EViewType.GRID)} />
            </IconButton>
            <IconButton disableRipple isSquare onClick={() => onChange(EViewType.LIST)}>
                <Icon name={EIconName.LIST} size={EIconSize.SMALL} color={getIconColor(EViewType.LIST)} />
            </IconButton>
        </Box>
    );
};
