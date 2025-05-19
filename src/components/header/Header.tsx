import React from 'react';
import { Link, useLocation } from '@tanstack/react-router';
import cn from 'clsx';
import styles from './styles.module.less';
import { ROUTES } from '@router/routes';
import { AppBar, Box, Button, Icon, IconButton, Illustration, Toolbar } from '@components/common/ui-kit';
import { EColor, EIconName, EIconSize } from '@src/enums';
import { EIllustrationName } from '@src/enums/illustration';

export const Header: React.FC = () => {
    const location = useLocation();

    const isLinkActive = (path: string): boolean => {
        return location.pathname === `/${path}`;
    };

    const getNavLinkClass = (path: string): string => {
        return cn(styles.navLink, { [styles.active]: isLinkActive(path) });
    };

    return (
        <AppBar position="static" className={styles.appBar}>
            <Toolbar className={styles.toolbar}>
                <Box component={Link} to="/" className={styles.logo}>
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

                <Box className={styles.userActions}>
                    <IconButton color="primary" aria-label="Избранное" title="Избранное">
                        <Icon name={EIconName.STAR} color={EColor.BLUE} size={EIconSize.SMALL} />
                    </IconButton>

                    <Button
                        component={Link}
                        to={`/${ROUTES.ADD_VACANCY}`}
                        variant="contained"
                        color="primary"
                        className={styles.addVacancy}
                    >
                        Добавить вакансию
                    </Button>

                    <IconButton color="primary" aria-label="Профиль" title="Профиль">
                        <Illustration name={EIllustrationName.PROFILE_MALE} />
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    );
};
