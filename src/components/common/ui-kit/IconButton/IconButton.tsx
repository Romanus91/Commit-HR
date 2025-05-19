import React from 'react';
import { IconButtonProps, IconButton as MuiIconButton, styled } from '@mui/material';

interface IProps extends IconButtonProps {
    size?: 'small' | 'medium' | 'large';
}

const StyledIconButton = styled(MuiIconButton)<IProps>(({ size }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '48px',
    height: '48px',
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
