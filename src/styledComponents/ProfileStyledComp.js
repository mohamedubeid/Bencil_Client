import { theme } from '../theme';
export const ProfileButtonStyle = {
    fontWeight: '600',
    fontSize: '15px',
    color: '#000',
    border: ' 1px solid #00000080',
    p: '10px 20px',
    '&:hover': {
        backgroundColor: 'transparent',
        border: ' 1px solid #00000080',
    },
};

export const FollowStyle = {
    fontWeight: 600,
    fontSize: '15px',
    color: '#00000080',
    cursor: 'pointer',
};

export const BottomNavigationStyle = {
    '.MuiBottomNavigationAction-label': {
        fontWeight: 600,
        fontSize: '15px',
        lineHeight: '18px',
        color: '#000000',
    },
    '.Mui-selected': {
        color: theme.palette.primary.main,
        fontWeight: 600,
        fontSize: '15px',
        lineHeight: '18px',
    },
    paddingLeft: { xs: '80px', sm: '120px' },
    paddingRight: { xs: '80px', sm: '120px' },
    paddingTop: '0px',
    marginTop: '9px',
    borderBottom: '2px solid  rgba(0, 0, 0, 0.2)',
};
