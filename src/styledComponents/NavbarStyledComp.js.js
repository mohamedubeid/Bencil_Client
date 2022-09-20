import { styled, Toolbar, Box, Button, Avatar, MenuItem } from '@mui/material';

export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '5px',
    marginBottom: '5px',
}));

export const Search = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.light,
    minWidth: '100px',
    width: '100%',
    borderRadius: '24.3197px',
    input: {
        '&::placeholder': {
            fontWeight: '400',
            opacity: '60%',
        },
    },
    '&:hover': {
        backgroundColor: theme.palette.secondary.main,
    },
}));

export const Icons = styled(Box)(({ theme }) => ({
    alignItems: 'center',
    gap: '0.3rem',
    display: 'flex',
}));

export const UploadButton = styled(Button)(({ theme }) => ({
    display: 'none',
    textTransform: 'none',
    borderRadius: '5px',
    padding: '11px 36px',
    fontWeight: 700,
    fontSize: '15px',
    lineHeight: '18.29px',
    border: '2px solid #E3E3E4',
    [theme.breakpoints.up('sm')]: {
        display: 'block',
    },
    '&:hover': {
        border: `2px solid ${theme.palette.primary.main}`,
    },
}));

export const UserAvatar = styled(Avatar)(({ theme }) => ({
    height: '44px',
    width: '44px',
    border: `1px solid ${theme.palette.primary.main}`,
}));

export const Logo = styled('img')(({ theme }) => ({
    display: 'inline',
    width: '145px',
    marginLeft: '10px',
    height: '33px',
    [theme.breakpoints.down('md')]: {
        display: 'none',
    },
}));

export const LogoImage = styled('img')(({ theme }) => ({
    width: '43px',
    height: '42px',
}));

export const BadgeStyle = {
    width: '25px',
    height: '25px',
};

export const MenuItemStyled = styled(MenuItem)(({ theme }) => ({
    fontWeight: '600',
    fontSize: '12.82px',
    lineHeight: '15.62px',
    paddingLeft: '27.35px',
}));
