// @ts-nocheck // TODO: remove
import React from 'react';
import { IKeycloakContextProps } from './types/types';

/**
 * Функция для создания контекста keycloak.
 * @param initialContext Начальное значение контекста.
 */
const createKeycloakContext = (
    initialContext?: Partial<IKeycloakContextProps>,
): React.Context<IKeycloakContextProps> => {
    return React.createContext({
        initialized: false,
        ...initialContext,
    });
};

export const KeycloakContext = createKeycloakContext();
