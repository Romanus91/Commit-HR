import { setupWorker } from 'msw/browser';
import { candidatesHandlers } from '@src/mocks/handlers/candidates';

export const worker = setupWorker(...candidatesHandlers);
