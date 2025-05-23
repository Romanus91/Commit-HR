import React from 'react';
import { InputAdornment as MuiInputAdornment, InputAdornmentProps } from '@mui/material';

interface IProps extends InputAdornmentProps {
    children: React.ReactNode;
}

export const InputAdornment: React.FC<React.PropsWithChildren<IProps>> = ({ children, ...rest }) => {
    return <MuiInputAdornment {...rest}>{children}</MuiInputAdornment>;
};
