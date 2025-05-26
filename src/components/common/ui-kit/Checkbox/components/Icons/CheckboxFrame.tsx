import React from 'react';

interface IProps {
    disabled?: boolean;
}

export const CheckboxFrame: React.FC<IProps> = (props) => {
    const { disabled } = props;

    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect fill={!disabled ? '#FFFFFF' : '006C3F'} height="23" rx="3.5" width="23" x="0.5" y="0.5" />
            <rect x="1" y="1" width="22" height="22" rx="5" stroke="#AAA8AD" strokeWidth="2" />
        </svg>
    );
};
