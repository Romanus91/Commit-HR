import React from 'react';

type TagName = 'div' | 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'label' | 'article' | 'legend';

type Props = {
    center?: boolean;
    className?: string;
    tag?: TagName;
};

export const Typography: React.FC<React.PropsWithChildren<Props>> = ({ tag, className, children }) => {
    const Tag = tag || 'p';

    return <Tag className={className}>{children}</Tag>;
};
