import { setupWorker } from 'msw/browser';
import { candidatesHandlers } from '@src/mocks/handlers/candidates';
import { vacanciesHandlers } from '@src/mocks/handlers/vacancies';

export const worker = setupWorker(...candidatesHandlers, ...vacanciesHandlers);
