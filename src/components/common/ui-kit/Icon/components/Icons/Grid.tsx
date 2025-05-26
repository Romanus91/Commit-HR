import * as React from 'react';
import { ISVGIconProps } from '@components/common/ui-kit/Icon/types';

export const Grid: React.FC<ISVGIconProps> = ({ size, color = 'currentColor' }) => (
    <svg fill="none" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
        <rect width="10.5" height="10.5" fill={color} />
        <rect y="13.5" width="10.5" height="10.5" fill={color} />
        <rect x="13.5" width="10.5" height="10.5" fill={color} />
        <rect x="13.5" y="13.5" width="10.5" height="10.5" fill={color} />
    </svg>
);
