import React from 'react';
import MuiBox, { BoxProps as MuiBoxProps } from '@mui/material/Box';
import { Link, LinkProps } from '@tanstack/react-router';

type BoxBaseProps = Omit<MuiBoxProps, 'classes' | 'style'>;

interface IProps extends BoxBaseProps {
    ref?: React.Ref<HTMLElement>;
    to?: LinkProps['to'];
}

export const Box: React.FC<React.PropsWithChildren<IProps>> = ({ ref, to, ...restProps }) => {
    const linkProps = to ? { component: Link, to } : {};

    return <MuiBox ref={ref} {...restProps} {...linkProps} />;
};
