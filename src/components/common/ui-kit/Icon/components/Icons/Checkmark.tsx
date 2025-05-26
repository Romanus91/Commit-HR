import * as React from 'react';
import { ISVGIconProps } from '@components/common/ui-kit/Icon/types';

export const Checkmark: React.FC<ISVGIconProps> = ({ size, color = 'currentColor' }) => (
    <svg fill="none" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="6" fill={color} />
        <path
            d="M16.5576 7.41947C17.1164 6.86089 18.0224 6.86077 18.5811 7.41947C19.1397 7.97817 19.1396 8.88416 18.5811 9.4429L11.499 16.5249C11.2182 16.8058 10.8495 16.9444 10.4815 16.9429C10.1134 16.9444 9.74472 16.8057 9.46389 16.5249L5.41702 12.4781C4.85833 11.9194 4.85845 11.0134 5.41702 10.4546C5.97577 9.89587 6.8817 9.89587 7.44046 10.4546L10.4815 13.4956L16.5576 7.41947Z"
            fill="white"
        />
    </svg>
);
