import { createRouter, createRoute, createRootRoute } from '@tanstack/react-router';
import { AppLayout } from '../components/layout';
import { HomePage } from '../pages/Home';
import { VacanciesPage } from '../pages/Vacancies/Vacancies';
import { CandidatesPage } from '../pages/Candidates';
import { ProjectsPage } from '../pages/Projects';
import { ROUTES } from './routes';

const rootRoute = createRootRoute({
    component: AppLayout,
});

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

const routeTree = rootRoute.addChildren([homeRoute, vacanciesRoute, candidatesRoute, projectsRoute]);

export const router = createRouter({
    routeTree,
});
