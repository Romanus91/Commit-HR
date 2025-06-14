import useMuiMediaQuery from '@mui/material/useMediaQuery';
import { EBreakpoint } from '@src/enums/breakpoints';

export enum EQuery {
    MOBILE = 'MOBILE',
    TABLET = 'TABLET',
    DESKTOP = 'DESKTOP',
    DESKTOP2K = 'DESKTOP2K',
}

const mapQueryToQueryInput = {
    [EQuery.MOBILE]: `(max-width: ${EBreakpoint.TABLET - 1}px)`,
    [EQuery.TABLET]: `(min-width: ${EBreakpoint.TABLET}px) and (max-width: ${EBreakpoint.DESKTOP - 1}px)`,
    [EQuery.DESKTOP]: `(min-width: ${EBreakpoint.DESKTOP}px) and (max-width: ${EBreakpoint.DESKTOP2K - 1}px)`,
    [EQuery.DESKTOP2K]: `(min-width: ${EBreakpoint.DESKTOP2K}px)`,
};

/**
 * Хук для проверки разрешения экрана клиента.
 */
export const useMediaQuery = (query: EQuery): boolean => useMuiMediaQuery(mapQueryToQueryInput[query]);
