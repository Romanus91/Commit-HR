import React from 'react';
import { useFormContext } from 'react-hook-form';
import { Box, Button } from '@components/common/ui-kit';
import styles from './styles.module.less';
import { CheckboxGroup } from '@components/CheckboxGroup';
import { IFilterFormValues } from '../../../../types';
import { CANDIDATE_GROUP_FILTERS } from './constants';

export const FilterPanel: React.FC = () => {
    const { control, reset } = useFormContext<IFilterFormValues>();

    const handleReset = (): void => {
        reset();
    };

    return (
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
    );
};
