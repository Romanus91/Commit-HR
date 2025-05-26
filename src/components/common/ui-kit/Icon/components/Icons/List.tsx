import * as React from 'react';
import { ISVGIconProps } from '@components/common/ui-kit/Icon/types';

export const List: React.FC<ISVGIconProps> = ({ size, color = 'currentColor' }) => (
    <svg fill="none" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
        <rect x="0.5" width="24" height="6" fill={color} />
        <rect x="0.5" y="9" width="24" height="6" fill={color} />
        <rect x="0.5" y="18" width="24" height="6" fill={color} />
    </svg>
);
