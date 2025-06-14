import React from 'react';
import { Avatar as MuiAvatar, styled, AvatarProps as MuiAvatarProps } from '@mui/material';
import { EAvatarSize } from './enums';
import { getInitials } from './utils';
import { EColor } from '@src/enums';

interface IProps extends MuiAvatarProps {
    name?: string;
    size?: EAvatarSize;
}

const StyledAvatar = styled(MuiAvatar, {
    shouldForwardProp: (prop) => prop !== 'size',
})<{ size: number | string }>(({ size }) => ({
    backgroundColor: EColor.LIGHT_GRAY_BLUE,
    color: EColor.ROYAL_PURPLE,
    fontWeight: 600,
    '&:hover': {
        opacity: 0.9,
    },
    ...(size === EAvatarSize.MEDIUM && {
        width: '80px',
        height: '80px',
        borderRadius: '24px',
        fontSize: '16px',
        lineHeight: '24px',
    }),
}));

export const Avatar: React.FC<IProps> = ({ src, name, size = EAvatarSize.MEDIUM, alt, sx, ...props }) => {
    const initials = getInitials(name);

    return (
        <StyledAvatar src={src} alt={alt ?? name ?? 'Avatar'} size={size} sx={sx} {...props}>
            {!src && initials}
        </StyledAvatar>
    );
};
