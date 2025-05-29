import React from 'react';
import { ICandidate } from '@src/types/api';
import { Box } from '@components/common/ui-kit';
import styles from './styles.module.less';
import { CandidateCard, ECandidateCardTheme } from '../../../CandidateCard';
import { useRouter } from '@tanstack/react-router';
import { ROUTES } from '@router/routes';

interface IProps {
    list?: ICandidate[];
}

export const CandidatesGrid: React.FC<IProps> = ({ list }) => {
    const router = useRouter();

    const handleCardClick = (id: string): void => {
        router.navigate({
            to: `/${ROUTES.CANDIDATES}/${id}`,
            params: { id },
        });
    };

    if (!list) {
        return null;
    }

    return (
        <Box className={styles.container}>
            {list.map((item) => {
                return (
                    <CandidateCard
                        key={item.id}
                        item={item}
                        onClickCard={handleCardClick}
                        theme={ECandidateCardTheme.DARK}
                    />
                );
            })}
        </Box>
    );
};
