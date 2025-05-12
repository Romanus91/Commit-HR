// src/router/router.ts
import { createRouter, createRoute, createRootRoute } from '@tanstack/react-router';
import { AppLayout } from '../components/layout';
import { HomePage } from '../pages/Home';
import { VacanciesPage } from '../pages/Vacancies';
import { CandidatesPage } from '../pages/Candidates';
import { ProjectsPage } from '../pages/Projects';
import { ROUTES } from './routes';

// Создаем корневой маршрут
const rootRoute = createRootRoute({
    component: AppLayout,
});

// Используем функцию createRoute вместо rootRoute.createRoute
const homeRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: `/${ROUTES.HOME}`,
    component: HomePage,
});

const vacanciesRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: `/${ROUTES.VACANCIES}`,
    component: VacanciesPage,
});

const candidatesRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: `/${ROUTES.CANDIDATES}`,
    component: CandidatesPage,
});

const projectsRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: `/${ROUTES.PROJECTS}`,
    component: ProjectsPage,
});

// Определяем таблицу маршрутов
const routeTree = rootRoute.addChildren([homeRoute, vacanciesRoute, candidatesRoute, projectsRoute]);

// Создаем экземпляр роутера
export const router = createRouter({
    routeTree,
});

// Объявляем типы для TypeScript
declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router;
    }
}
