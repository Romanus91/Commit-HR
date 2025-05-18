import React from 'react';
import * as Icons from './components/Icons';
import { EColor, EIconName, EIconSize } from '@src/enums';

interface IProps {
    name: EIconName;
    size?: EIconSize;
    color?: EColor;
}

export const Icon: React.FC<IProps> = (props) => {
    const { name, size = EIconSize.MEDIUM, color } = props;
    const NamedIcon = Icons[name];

    if (!NamedIcon) {
        return null;
    }

    return <NamedIcon color={color} size={size} />;
};
