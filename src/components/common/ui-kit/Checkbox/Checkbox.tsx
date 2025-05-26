import { Checkbox as MuiCheckbox, CheckboxProps } from '@mui/material';
import React from 'react';
import { CheckboxFrame } from './components/Icons';
import { Icon } from '@components/common/ui-kit/Icon';
import { EColor, EIconName, EIconSize } from '@src/enums';

export const Checkbox: React.FC<CheckboxProps> = (props) => {
    const { disabled } = props;

    return (
        <MuiCheckbox
            checkedIcon={
                <Icon
                    name={EIconName.CHECKMARK}
                    color={disabled ? EColor.DARK_GRAY : EColor.PURPLE}
                    size={EIconSize.SMALL}
                />
            }
            icon={<CheckboxFrame disabled={disabled} />}
            sx={{ '&.MuiCheckbox-root': { color: '#AAA8AD', '&:hover': { color: '#B1B6BF' }, padding: '0 12px 0 0' } }}
            disableRipple
            {...props}
        />
    );
};
