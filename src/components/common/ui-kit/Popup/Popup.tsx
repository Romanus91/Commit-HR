import React from 'react';
import Popover from '@mui/material/Popover';

import { defaultPosition } from './data/constants';
import { PopupPosition } from './types';

type Props = {
    id: string;
    isOpen: boolean;
    anchor: HTMLElement | null;
    onClose: () => void;
    className?: string;
    position?: PopupPosition;
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
};

export const Popup: React.FC<React.PropsWithChildren<Props>> = (props) => {
    const position = props.position || defaultPosition;

    return (
        <Popover
            id={props.id}
            className={props.className}
            open={props.isOpen}
            onClose={props.onClose}
            anchorEl={props.anchor}
            anchorOrigin={position}
            onClick={props.onClick}
        >
            {props.children}
        </Popover>
    );
};
