import * as React from 'react';
import { ISVGIconProps } from '@components/common/ui-kit/Icon/types';

export const Plus: React.FC<ISVGIconProps> = ({ size, color = 'currentColor' }) => (
    <svg fill="none" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
        <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z" fill={color} />
    </svg>
);
