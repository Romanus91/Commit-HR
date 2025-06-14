import { createRouter, createRoute, createRootRoute, redirect } from '@tanstack/react-router';
import { AppLayout } from '../components/layout';
import { HomePage } from '../pages/Home';
import { VacanciesPage } from '../pages/Vacancies';
import { CandidatesPage } from '../pages/Candidates';
import { ProjectsPage } from '../pages/Projects';
import { ROUTES } from './routes';
import { CandidatePage } from '@pages/Candidate';
import { VacancyPage } from '@pages/Vacancy/VacancyPage';

const rootRoute = createRootRoute({
    component: AppLayout,
});

const indexRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
    beforeLoad: () => {
        throw redirect({
            to: `/${ROUTES.HOME}`,
        });
    },
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

const vacancyDetailsRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: `/${ROUTES.VACANCIES}/$id`,
    component: VacancyPage,
});

const candidatesRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: `/${ROUTES.CANDIDATES}`,
    component: CandidatesPage,
});

const candidateDetailsRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: `/${ROUTES.CANDIDATES}/$id`,
    component: CandidatePage,
});

const projectsRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: `/${ROUTES.PROJECTS}`,
    component: ProjectsPage,
});

const routeTree = rootRoute.addChildren([
    indexRoute,
    homeRoute,
    vacanciesRoute,
    candidatesRoute,
    vacancyDetailsRoute,
    candidateDetailsRoute,
    projectsRoute,
]);

const router = createRouter({
    routeTree,
});

export { router, candidateDetailsRoute, vacancyDetailsRoute };
