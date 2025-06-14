import React from 'react';
import { styled, TextField, TextFieldProps } from '@mui/material';
import { InputAdornment } from './components/InputAdornment';
import { EColor } from '@src/enums';

export type InputProps = TextFieldProps & {
    variant?: 'filled' | 'outlined' | 'standard';
    adornment?: React.ReactNode;
    adornmentPosition?: 'start' | 'end';
};

export const StyledInput = styled(TextField)<InputProps>(({ theme, label, variant }) => ({
    ...(variant === 'filled' && {
        '& .MuiFilledInput-root': {
            height: '48px',
            fontSize: '16px',
            lineHeight: '24px',
            fontWeight: 600,
            padding: '0 12px',
            border: '1px solid #F3F3F3',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: '#F3F3F3',
            '& .MuiFilledInput-input': {
                padding: label ? '12px 0 7px' : '12px 0',
                textOverflow: 'ellipsis',
                '&::placeholder': {
                    color: EColor.COOL_GRAY,
                    opacity: 1,
                    fontWeight: 500,
                },
            },
            '&:hover': {
                backgroundColor: theme.palette.common.white,
                border: `1px solid #85818A`,
            },
            '&.Mui-focused': {
                backgroundColor: theme.palette.common.white,
                border: `1px solid #85818A`,
            },
        },
        '& .MuiFormLabel-root': {
            '&.MuiInputLabel-shrink': {
                transform: 'translate(16px, 7px) scale(0.75)',
            },
        },
    }),
    ...(variant === 'outlined' && {
        '& .MuiOutlinedInput-root': {
            height: '48px',
            fontSize: '16px',
            lineHeight: '24px',
            fontWeight: 600,
            borderRadius: theme.shape.borderRadius,
            backgroundColor: theme.palette.common.white,
            '& .MuiOutlinedInput-input': {
                padding: label ? '12px 0 7px' : '12px 0',
                textOverflow: 'ellipsis',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: 'black',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: 'black',
            },
        },
    }),
    ...(variant === 'standard' && {
        '& .MuiInput-root': {
            height: '48px',
            fontSize: '16px',
            lineHeight: '24px',
            fontWeight: 600,
            padding: '0 12px',
            backgroundColor: theme.palette.common.white,
            borderRadius: theme.shape.borderRadius,
            '& .MuiInput-input': {
                padding: label ? '12px 0 7px' : '12px 0',
                textOverflow: 'ellipsis',
            },
            '&::before': {
                borderBottom: 'none',
            },
            '&::after': {
                borderBottom: 'none',
            },
            '&:hover::before': {
                borderBottom: 'none !important',
            },
        },
    }),
    '& .MuiFormHelperText-root': {
        padding: 0,
        margin: '4px 0px -20px 16px',
        '&.Mui-error': {
            color: theme.palette.error.main,
        },
    },
    input: {
        '&:-webkit-autofill': {
            height: '5px',
            WebkitBoxShadow: `0 0 0 1000px ${theme.palette.common.white} inset`,
            backgroundColor: theme.palette.common.white,
        },
    },
}));

export const Input: React.FC<InputProps> = ({
    variant = 'standard',
    adornment,
    adornmentPosition = 'start',
    autoComplete = 'off',
    ...props
}) => {
    return (
        <StyledInput
            autoComplete={autoComplete}
            {...props}
            slotProps={{
                ...props.slotProps,
                input: {
                    ...props.slotProps?.input,
                    disableUnderline: variant === 'filled' || variant === 'outlined',
                    ...(adornment && {
                        [`${adornmentPosition}Adornment`]: (
                            <InputAdornment position={adornmentPosition}>{adornment}</InputAdornment>
                        ),
                    }),
                },
            }}
            variant={variant}
            fullWidth
        />
    );
};
