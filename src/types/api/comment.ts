export interface ICommentDTO {
    id: string;
    candidateId: string;
    vacancyId: string;
    /** ID of the comment author.  */
    userId: string;
    authorName: string;
    comment: string;
    createdAt: string;
    updatedAt: string;
}
