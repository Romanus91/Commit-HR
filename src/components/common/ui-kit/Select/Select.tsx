import {
    Select as MuiSelect,
    InputLabel,
    InputLabelProps,
    SelectProps,
    styled,
    SelectChangeEvent,
    FormControl,
    FormHelperText,
} from '@mui/material';
import React from 'react';
import { IProps as IMenuItemProps } from '@src/components/common/ui-kit/MenuItem/';
import { EColor } from '@src/enums';
import { ArrowIcon } from './components/ArrowIcon';

export interface IProps extends Omit<SelectProps, 'onChange' | 'variant'> {
    helperText?: string;
    onChange: (value?: string) => void;
    children?: React.ReactElement<IMenuItemProps> | React.ReactElement<IMenuItemProps>[];
    labelForDrawer?: string;
    ref?: React.Ref<HTMLInputElement>;
}

const StyledInputLabel = styled(InputLabel)<InputLabelProps>(({ theme }) => ({
    '&': {
        ...theme.typography.body2,
        left: '4px',
    },
}));

const StyledSelect = styled(MuiSelect)<SelectProps>(({ theme, endAdornment }) => ({
    height: '46px',
    '&': {
        ...theme.typography.body2,
        padding: '12px',
        marginTop: '1px',
        height: '48px',
        color: theme.palette.common.black,
        fontWeight: 600,
        fontSize: '16px',
        lineHeight: '24px',
        '&.Mui-focused': {
            '& .MuiOutlinedInput-notchedOutline': {
                border: `2px solid ${EColor.PURPLE}`,
            },
        },
    },

    '& .MuiSelect-select': {
        paddingLeft: 0,
    },

    '& + .MuiFormHelperText-root': {
        margin: '4px 0px -20px 16px',
        '&.Mui-error': {
            color: theme.palette.error.main,
        },
    },
    '& .MuiSelect-icon': {
        top: '14px',
        right: endAdornment ? '48px' : '12px',
    },
}));

const menuStyles = {
    '.MuiPaper-root .MuiList-root': {
        padding: 0,
        maxHeight: '231px',
    },
    '.MuiPaper-root .Mui-selected': {
        backgroundColor: `${EColor.LIGHT_PURPLE} !important`,
        '&:hover': {
            backgroundColor: `${EColor.LIGHT_INDIGO} !important`,
        },
    },
    '.MuiPaper-root .MuiMenuItem-root': {
        padding: '12px 16px',
        fontWeight: 500,
        fontSize: '16px',
        lineHeight: '24px',
        backgroundColor: EColor.WHITE,
        '&:hover': {
            backgroundColor: EColor.LIGHT_INDIGO,
        },
    },
    '.MuiPaper-root::-webkit-scrollbar': {
        display: 'block',
        width: '3px',
    },
    '.MuiPaper-root::-webkit-scrollbar-track': {
        boxShadow: `inset 0 0 5px ${EColor.GRAY}`,
        borderRadius: '10px',
    },
    '.MuiPaper-root::-webkit-scrollbar-thumb': {
        background: EColor.PURPLE,
        borderRadius: '1px',
    },
};

export const Select = (props: IProps) => {
    const { label, children, helperText, onChange, ref, ...selectProps } = props;

    const [isOpen, setIsOpen] = React.useState(false);

    const onOpenSelect = () => {
        setIsOpen(true);
    };

    const onCloseSelect = () => {
        setIsOpen(false);
    };

    const handleChange = (event: SelectChangeEvent<unknown>) => {
        onChange(event.target.value as string);
    };

    return (
        <FormControl error={props.error} variant="filled" fullWidth>
            <StyledInputLabel
                id="demo-simple-select-filled-label"
                shrink={!!selectProps.value || !!selectProps.defaultValue}
            >
                {label}
            </StyledInputLabel>
            <StyledSelect
                IconComponent={ArrowIcon}
                labelId="demo-simple-select-filled-label"
                MenuProps={{ sx: menuStyles }}
                onChange={handleChange}
                onClose={onCloseSelect}
                onOpen={onOpenSelect}
                open={isOpen}
                ref={ref}
                variant="outlined"
                fullWidth
                {...selectProps}
            >
                {React.Children.map(children, (child) => {
                    if (React.isValidElement<IMenuItemProps>(child)) {
                        return React.cloneElement(child, {
                            disableRipple: true,
                        });
                    }

                    return null;
                })}
            </StyledSelect>
            {props.error && <FormHelperText>{helperText}</FormHelperText>}
        </FormControl>
    );
};
