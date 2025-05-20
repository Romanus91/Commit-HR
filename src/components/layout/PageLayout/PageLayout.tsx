import React from 'react';
import styles from './styles.module.less';

interface IProps {
    children: React.ReactNode;
}

export const PageLayout: React.FC<React.PropsWithChildren<IProps>> = ({ children }) => {
    return <div className={styles.wrapper}>{children}</div>;
};
