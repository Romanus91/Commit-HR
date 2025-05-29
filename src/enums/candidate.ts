export enum ECandidateGrade {
    JUNIOR = 'JUNIOR',
    MIDDLE = 'MIDDLE',
    SENIOR = 'SENIOR',
}

export enum EGeneralStatus {
    NEW = 'NEW',
    ACTIVE = 'ACTIVE',
    REJECTED = 'REJECTED',
    WORKING = 'WORKING',
    IN_RESERVE = 'IN_RESERVE',
}

export enum EDocumentType {
    RESUME = 'RESUME',
    CONSENT = 'CONSENT',
    OFFER = 'OFFER',
    PROFILE_IMAGE = 'PROFILE_IMAGE',
    OTHER = 'OTHER',
}

/**
 * Тип занятости:
 * FULL_TIME - Полная занятость.
 * PART_TIME - Частичная занятость.
 * PROJECT_BASED - Проектная занятость.
 */
export enum EEmploymentType {
    FULL_TIME = 'full_time',
    PART_TIME = 'part_time',
    PROJECT_BASED = 'project_based',
}

/**
 * Тип оформления:
 * TK - Трудов.
 * IP - Индивидуальный предприниматель.
 * GPH - Договор гражданско-правового характера.
 * SZ - Самозанятый.
 */
export enum EEmploymentOption {
    TK = 'TK',
    IP = 'IP',
    GPH = 'GPH',
    SZ = 'SZ',
}

/**
 * Роль рекрутера:
 * RECRUITER - Рекрутер.
 * EMPLOYER - Работодатель.
 * ADMIN - Администратор.
 */
export enum ERecruiterRole {
    RECRUITER = 'RECRUITER',
    EMPLOYER = 'EMPLOYER',
    ADMIN = 'ADMIN',
}
