import { Box, Button, Input, Typography } from '@components/common/ui-kit';
import React from 'react';
import styles from './styles.module.less';
import { CommentsList } from './components/CommentsList';
import { ICommentDTO } from '@src/types/api';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ECommentApiEndpoint } from './enum';
import { useCreateCandidateCommentMutation } from '@src/api/candidates';
import { IFormInput } from './types';

interface IProps {
    candidateId: string;
    commentsData?: ICommentDTO[];
    endpoint: ECommentApiEndpoint;
    vacancyId?: string;
}

/** Компонент для отображения комментариев и полем ввода для добавления коментария. */
const Comments: React.FC<IProps> = ({ candidateId, commentsData, endpoint }) => {
    const { register, handleSubmit, watch, reset } = useForm<IFormInput>({
        mode: 'onChange',
    });
    const [postCandidateComment] = useCreateCandidateCommentMutation();
    const [localComments, setLocalComments] = React.useState<ICommentDTO[]>(commentsData ?? []);

    const onSubmit: SubmitHandler<IFormInput> = async (data: { comment: string }) => {
        try {
            if (endpoint === ECommentApiEndpoint.CANDIDATE) {
                const response = await postCandidateComment({ candidateId, comment: data.comment }).unwrap();

                setLocalComments((prev) => [response, ...prev]);
                reset();
            } else if (endpoint === ECommentApiEndpoint.VACANCY) {
                reset(); // TODO: Добавить запрос для оставления комментария к вакансии
            }
        } catch (error) {
            console.error('Comments', error);
        }
    };

    React.useEffect(() => {
        setLocalComments(commentsData ?? []);
    }, [commentsData]);

    return (
        <Box className={styles.container}>
            <Box className={styles.titleWrapper}>
                <Typography className={styles.title}>Комментарии</Typography>
            </Box>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <Input
                    {...register('comment', { required: true })}
                    placeholder="Добавьте комментарий"
                    variant="filled"
                />
                <Button disabled={Boolean(!watch().comment)} sx={{ width: '155px' }} type="submit" variant="contained">
                    Добавить
                </Button>
            </form>
            <CommentsList commentsData={localComments} />
        </Box>
    );
};

export default Comments;
