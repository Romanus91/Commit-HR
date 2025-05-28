import React from 'react';
import { IconButtonProps, IconButton as MuiIconButton, styled } from '@mui/material';

type ButtonSize = 'small' | 'medium' | 'large' | 'xlarge';

interface IProps extends IconButtonProps {
    isSquare?: boolean;
    buttonSize?: ButtonSize;
}

const StyledIconButton = styled(MuiIconButton, {
    shouldForwardProp: (prop) => prop !== 'isSquare' && prop !== 'buttonSize',
})<IProps>(({ buttonSize = 'medium', isSquare }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    borderRadius: isSquare ? '0' : '50%',
    ...(buttonSize === 'small' && {
        width: '16px',
        height: '16px',
    }),
    ...(buttonSize === 'medium' && {
        width: '24px',
        height: '24px',
    }),
    ...(buttonSize === 'large' && {
        width: '32px',
        height: '32px',
    }),
    ...(buttonSize === 'xlarge' && {
        width: '40px',
        height: '40px',
    }),
}));

export const IconButton: React.FC<React.PropsWithChildren<IProps>> = (props) => {
    return <StyledIconButton {...props} />;
};
