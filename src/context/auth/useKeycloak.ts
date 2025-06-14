import { useContext } from 'react';
import { KeycloakContext } from './KeycloakContext';
import { IKeycloakContextProps } from './types/types';

export const useKeycloak = (): IKeycloakContextProps => {
    const context = useContext(KeycloakContext);

    if (!context) {
        throw new Error('useKeycloak must be used within a KeycloakProvider');
    }

    return context;
};
