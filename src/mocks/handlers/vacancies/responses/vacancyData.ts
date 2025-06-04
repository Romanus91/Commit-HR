import { EEmploymentType, EVacancyStatus, EWorkFormat, ECandidateGrade } from '@src/enums';

export default {
    id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
    employer: {
        id: '1fa85f64-5717-4562-b3fc-2c963f66afa6',
        firstName: 'Иван',
        lastName: 'Иванов',
        patronymic: 'Иванович',
        email: 'ivanov@company.com',
        phoneNumber: '+79991234567',
        telegram: '@ivanov',
        role: 'EMPLOYER',
    },
    city: {
        id: '2fa85f64-5717-4562-b3fc-2c963f66afa6',
        name: 'Москва',
    },
    department: {
        id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        name: 'Отдел разработки',
    },
    employmentType: EEmploymentType.FULL_TIME,
    title: 'Frontend Developer (React)',
    salaryFrom: 150000,
    salaryTo: 250000,
    currencyCode: 'RUB',
    description:
        'Ищем опытного Frontend разработчика для работы над высоконагруженными проектами компании. Вы будете работать в команде из 10+ разработчиков над созданием современных веб-приложений.',
    responsibilities: `• Разработка пользовательских интерфейсов с использованием React и TypeScript
• Оптимизация производительности веб-приложений
• Участие в код-ревью и менторинг junior разработчиков
• Взаимодействие с backend командой и дизайнерами
• Написание unit и интеграционных тестов`,
    experience: '3-5 лет коммерческой разработки',
    grade: ECandidateGrade.MIDDLE,
    workFormat: EWorkFormat.REMOTE,
    maxPositions: 2,
    candidatesCount: 5,
    deadline: '2025-06-26T12:13:47.537Z',
    status: EVacancyStatus.OPEN,
    createdAt: '2025-05-20T09:21:39.178Z',
    updatedAt: '2025-05-26T12:13:47.537Z',
    recruiters: [
        {
            id: '4fa85f64-5717-4562-b3fc-2c963f66afa6',
            firstName: 'Мария',
            lastName: 'Петрова',
            patronymic: 'Сергеевна',
            email: 'petrova@company.com',
            phoneNumber: '+79997654321',
            telegram: '@petrova_hr',
            role: 'RECRUITER',
        },
        {
            id: '5fa85f64-5717-4562-b3fc-2c963f66afa6',
            firstName: 'Алексей',
            lastName: 'Смирнов',
            patronymic: null,
            email: 'smirnov@company.com',
            phoneNumber: '+79995551234',
            telegram: '@smirnov_hr',
            role: 'RECRUITER',
        },
    ],
    candidates: [
        {
            id: '6fa85f64-5717-4562-b3fc-2c963f66afa6',
            fullName: 'Комызякин Петр Олегович',
            email: 'komyzyakin@email.com',
            phone: '+79991112233',
        },
        {
            id: '7fa85f64-5717-4562-b3fc-2c963f66afa6',
            fullName: 'Сидоров Андрей Викторович',
            email: 'sidorov@email.com',
            phone: '+79994445566',
        },
    ],
};
