import * as React from 'react';
import { ISVGIconProps } from '@components/common/ui-kit/Icon/types';

export const CardProfile: React.FC<ISVGIconProps> = ({ size, color = 'currentColor' }) => (
    <svg fill="none" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 13C14.2091 13 16 11.2091 16 9C16 6.79086 14.2091 5 12 5C9.79086 5 8 6.79086 8 9C8 11.2091 9.79086 13 12 13ZM12 15C15.3137 15 18 12.3137 18 9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9C6 12.3137 8.68629 15 12 15Z"
            fill={color}
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.7564 13.0299C11.9156 12.9901 12.0821 12.99 12.2413 13.0298L18.8285 14.6754L19.9698 19.2584L18.0291 19.7416L17.1781 16.3246L11.999 15.0308L6.82406 16.3246L5.96958 19.7425L4.0293 19.2575L5.17482 14.6754L11.7564 13.0299Z"
            fill={color}
        />
    </svg>
);
