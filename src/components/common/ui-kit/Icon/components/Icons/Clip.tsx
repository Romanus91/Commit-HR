import * as React from 'react';
import { ISVGIconProps } from '@components/common/ui-kit/Icon/types';

export const Clip: React.FC<ISVGIconProps> = ({ size, color = 'currentColor' }) => (
    <svg fill="none" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9 7C9 5.89543 9.89543 5 11 5H13C14.1046 5 15 5.89543 15 7V15H13V7H11V13H9V7Z"
            fill={color}
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9 18C9 20.2091 10.7909 22 13 22H14C16.2091 22 18 20.2091 18 18V13H16V18C16 19.1046 15.1046 20 14 20H13C11.8954 20 11 19.1046 11 18V13H9V18Z"
            fill={color}
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6 6C6 3.79086 7.79086 2 10 2H14C16.2091 2 18 3.79086 18 6V13H16V6C16 4.89543 15.1046 4 14 4H10C8.89543 4 8 4.89543 8 6V17H6V6Z"
            fill={color}
        />
    </svg>
);
