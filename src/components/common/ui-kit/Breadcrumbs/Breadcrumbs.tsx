import React from 'react';
import MuiBreadcrumbs from '@mui/material/Breadcrumbs';
import { type BreadcrumbsProps } from '@mui/material/Breadcrumbs';

export const Breadcrumbs: React.FC<React.PropsWithChildren<BreadcrumbsProps>> = ({ children, ...props }) => {
    return (
        <MuiBreadcrumbs aria-label="breadcrumb" {...props}>
            {children}
        </MuiBreadcrumbs>
    );
};
