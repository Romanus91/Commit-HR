import React from 'react';
import { Link, useLocation } from '@tanstack/react-router';
import { AppBar, Toolbar, Box, Button, IconButton } from '@mui/material';
import styles from './styles.module.less';
import { ROUTES } from '@router/routes';
import { Icon, Illustration } from '@components/common/ui-kit';
import { EColor, EIconName, EIconSize } from '@src/enums';
import { EIllustrationName } from '@src/enums/illustration';

export const Header: React.FC = () => {
    const location = useLocation();

    const isLinkActive = (path: string): boolean => {
        return location.pathname === `/${path}`;
    };

    return (
        <AppBar
            position="static"
            sx={{
                bgcolor: '#f8f9fa',
                color: '#333',
                boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
            }}
        >
            <Toolbar className={styles.toolbar}>
                <Box component={Link} to="/" className={styles.logo}>
                    <span className={styles.commitText}>Commit</span>
                    <span className={styles.hrText}>HR</span>
                </Box>

                <nav className={styles.navLinks}>
                    <Link
                        to={`/${ROUTES.HOME}`}
                        className={`${styles.navLink} ${isLinkActive(ROUTES.HOME) ? styles.active : ''}`}
                    >
                        Главная
                    </Link>
                    <Link
                        to={`/${ROUTES.VACANCIES}`}
                        className={`${styles.navLink} ${isLinkActive(ROUTES.VACANCIES) ? styles.active : ''}`}
                    >
                        Вакансии
                    </Link>
                    <Link
                        to={`/${ROUTES.CANDIDATES}`}
                        className={`${styles.navLink} ${isLinkActive(ROUTES.CANDIDATES) ? styles.active : ''}`}
                    >
                        Кандидаты
                    </Link>
                    <Link
                        to={`/${ROUTES.PROJECTS}`}
                        className={`${styles.navLink} ${isLinkActive(ROUTES.PROJECTS) ? styles.active : ''}`}
                    >
                        Проекты
                    </Link>
                </nav>

                <Box sx={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 2 }}>
                    <IconButton color="primary" aria-label="Избранное" title="Избранное" sx={{ color: '#0d6efd' }}>
                        <Icon name={EIconName.STAR} color={EColor.BLUE} size={EIconSize.SMALL} />
                    </IconButton>

                    <Button
                        component={Link}
                        to={`/${ROUTES.ADD_VACANCY}`}
                        variant="contained"
                        color="primary"
                        sx={{
                            borderRadius: '4px',
                            textTransform: 'none',
                            fontSize: '14px',
                            padding: '6px 16px',
                            backgroundColor: '#0d6efd',
                            '&:hover': {
                                backgroundColor: '#0b5ed7',
                            },
                        }}
                    >
                        Добавить вакансию
                    </Button>

                    <IconButton color="primary" aria-label="Профиль" title="Профиль" sx={{ color: '#0d6efd' }}>
                        <Illustration name={EIllustrationName.PROFILE_MALE} />
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    );
};
