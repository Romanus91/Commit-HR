import React from 'react';
import { Link, useLocation } from '@tanstack/react-router';
import cn from 'clsx';
import styles from './styles.module.less';
import { ROUTES } from '@router/routes';
import { AppBar, Box, Toolbar } from '@components/common/ui-kit';
import { EColor } from '@src/enums';
import { UserActions } from './components/UserActions';

export const Header: React.FC = () => {
    const location = useLocation();

    const isLinkActive = (path: string): boolean => {
        return location.pathname === `/${path}`;
    };

    const getNavLinkClass = (path: string): string => {
        return cn(styles.navLink, { [styles.active]: isLinkActive(path) });
    };

    return (
        <AppBar position="static" className={styles.appBar} sx={{ backgroundColor: EColor.GRAY, boxShadow: 'none' }}>
            <Toolbar className={styles.toolbar}>
                <Box component={Link} to={`/${ROUTES.HOME}`} className={styles.logo}>
                    <span className={styles.commitText}>CommitHR</span>
                </Box>

                <nav className={styles.navLinks}>
                    <Link to={`/${ROUTES.HOME}`} className={getNavLinkClass(ROUTES.HOME)}>
                        Главная
                    </Link>
                    <Link to={`/${ROUTES.VACANCIES}`} className={getNavLinkClass(ROUTES.VACANCIES)}>
                        Вакансии
                    </Link>
                    <Link to={`/${ROUTES.CANDIDATES}`} className={getNavLinkClass(ROUTES.CANDIDATES)}>
                        Кандидаты
                    </Link>
                    <Link to={`/${ROUTES.PROJECTS}`} className={getNavLinkClass(ROUTES.PROJECTS)}>
                        Проекты
                    </Link>
                </nav>
                <UserActions />
            </Toolbar>
        </AppBar>
    );
};
