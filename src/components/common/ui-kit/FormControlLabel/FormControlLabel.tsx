import { FormControlLabel as MuiFormControlLabel, FormControlLabelProps, styled } from '@mui/material';
import React from 'react';

const StyledFormControlLabel = styled(MuiFormControlLabel)(() => ({
    '&': {
        margin: '0',
    },
}));

export const FormControlLabel: React.FC<FormControlLabelProps> = (props) => {
    return <StyledFormControlLabel {...props} />;
};
