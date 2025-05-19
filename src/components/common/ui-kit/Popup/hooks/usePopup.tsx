import React from 'react';

type ReturnType = {
    anchor: HTMLElement | null;
    isOpen: boolean;
    popupId: string;
    onClick: (event: React.MouseEvent<HTMLElement>) => void;
    onClose: () => void;
};

export const usePopup = (): ReturnType => {
    const popupId = React.useId();
    const [anchor, setAnchor] = React.useState<HTMLElement | null>(null);

    const onClick = (event: React.MouseEvent<HTMLElement>): void => setAnchor(anchor ? null : event.currentTarget);

    const onClose = React.useCallback(() => setAnchor(null), []);

    return {
        anchor,
        isOpen: Boolean(anchor),
        popupId,
        onClick,
        onClose,
    };
};
