import React from 'react';
import { IconButtonProps, IconButton as MuiIconButton, styled } from '@mui/material';

interface IProps extends IconButtonProps {
    isSquare?: boolean;
    size?: 'small' | 'medium' | 'large';
}

const StyledIconButton = styled(MuiIconButton)<IProps>(({ size, isSquare }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40px',
    height: '40px',
    borderRadius: isSquare ? '0' : '50%',
    ...(size === 'small' && {
        width: '16px',
        height: '16px',
    }),
    ...(size === 'medium' && {
        width: '24px',
        height: '24px',
    }),
    ...(size === 'large' && {
        width: '32px',
        height: '32px',
    }),
}));

export const IconButton: React.FC<React.PropsWithChildren<IProps>> = (props) => {
    return <StyledIconButton {...props} />;
};
