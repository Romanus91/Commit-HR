import { EColor } from '@src/enums';
import React from 'react';

interface IProps {
    className: string;
}

export const ArrowIcon: React.FC<IProps> = (props) => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <g clipPath="url(#clip0_43_7523)">
                <path
                    d="M12.0001 14.9998L7.75708 10.7568L9.17208 9.34277L12.0001 12.1718L14.8281 9.34277L16.2431 10.7568L12.0001 14.9998Z"
                    fill={EColor.DARK_GRAY}
                />
            </g>
            <defs>
                <clipPath id="clip0_43_7523">
                    <rect width="24" height="24" fill={EColor.WHITE} />
                </clipPath>
            </defs>
        </svg>
    );
};
