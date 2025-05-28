import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { Box, Button } from '@components/common/ui-kit';
import styles from './styles.module.less';
import { CheckboxGroup } from '@components/CheckboxGroup';
import { IFilterFormValues } from './types';
import { CANDIDATE_GROUP_FILTERS } from './constants';

export const FilterPanel: React.FC = () => {
    const methods = useForm<IFilterFormValues>({
        defaultValues: {
            grade: null,
            workFormat: null,
        },
    });

    const { control, reset } = methods;

    const handleReset = (): void => {
        reset();
    };

    return (
        <FormProvider {...methods}>
            <Box className={styles.container}>
                <Box className={styles.group}>
                    {CANDIDATE_GROUP_FILTERS.map(({ name, title, options }) => (
                        <CheckboxGroup key={name} control={control} name={name} title={title} options={options} />
                    ))}
                </Box>
                <Button type="button" onClick={handleReset}>
                    Сброс
                </Button>
            </Box>
        </FormProvider>
    );
};
