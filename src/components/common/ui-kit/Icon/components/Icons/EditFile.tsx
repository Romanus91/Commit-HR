import * as React from 'react';
import { ISVGIconProps } from '@components/common/ui-kit/Icon/types';

export const EditFile: React.FC<ISVGIconProps> = ({ size, color = 'currentColor' }) => (
    <svg fill="none" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_1000_1620)">
            <path
                d="M21 6.757L19 8.757V4H10V9H5.00002V20H19V17.243L21 15.243V21.008C20.9998 21.2712 20.895 21.5235 20.7088 21.7095C20.5226 21.8955 20.2702 22 20.007 22H3.99302C3.8617 21.9991 3.73185 21.9723 3.61087 21.9212C3.48989 21.8701 3.38017 21.7957 3.28796 21.7022C3.19575 21.6087 3.12286 21.4979 3.07346 21.3762C3.02406 21.2545 2.9991 21.1243 3.00002 20.993V8L9.00303 2H19.998C20.55 2 21 2.455 21 2.992V6.757ZM21.778 8.807L23.192 10.222L15.414 18L13.998 17.998L14 16.586L21.778 8.808V8.807Z"
                fill={color}
            />
        </g>
        <defs>
            <clipPath id="clip0_1000_1620">
                <rect width="24" height="24" fill="white" />
            </clipPath>
        </defs>
    </svg>
);
