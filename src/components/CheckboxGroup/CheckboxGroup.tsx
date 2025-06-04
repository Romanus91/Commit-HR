import { IFilterFormValues } from '@pages/Candidates/types';
import { Control, Controller } from 'react-hook-form';
import styles from './styles.module.less';
import { Box, Checkbox, FormControlLabel, Typography } from '@components/common/ui-kit';

interface IProps {
    control: Control<IFilterFormValues, unknown>;
    name: keyof IFilterFormValues;
    title: string;
    options: Array<{ value: string; label: string }>;
}

/**
 * Компонент для отображения группы чекбоксов.
 */
export const CheckboxGroup: React.FC<IProps> = ({ control, name, title, options }) => (
    <Box className={styles.container}>
        <Typography className={styles.title}>{title}</Typography>
        <Controller
            control={control}
            name={name}
            render={({ field: { value, onChange } }) => (
                <>
                    {options.map(({ value: checkboxValue, label }) => (
                        <FormControlLabel
                            key={checkboxValue}
                            control={
                                <Checkbox
                                    checked={Array.isArray(value) ? value.includes(checkboxValue) : false}
                                    onChange={(e) => {
                                        const newValue = Array.isArray(value)
                                            ? e.target.checked
                                                ? [...value, checkboxValue]
                                                : value.filter((v: string) => v !== checkboxValue)
                                            : e.target.checked
                                              ? [checkboxValue]
                                              : [];

                                        onChange(newValue);
                                    }}
                                />
                            }
                            label={
                                <Typography tag="span" className={styles.label}>
                                    {label}
                                </Typography>
                            }
                        />
                    ))}
                </>
            )}
        />
    </Box>
);
