import { styled, Typography, Button } from '@mui/material';

export const TypoStyle = {
    fontSIze: '22px',
    fontWeight: '700',
    lineHeight: '35px',
};

export const SideBarTitle = styled(Typography)(() => ({
    fontWeight: '700',
    fontSize: '15px',
}));

export const Name = styled(Typography)(() => ({
    fontWeight: '600',
    fontSize: '12px',
    lineHeight: '14.63px',
}));

export const UserName = styled(Typography)(() => ({
    fontWeight: '400',
    fontSize: '12px',
    lineHeight: '14.63px',
}));

export const SeeAllButton = styled(Button)(() => ({
    textTransform: 'none',
    fontWeight: '600',
    display: 'block',
    fontSize: '12px',
    paddingLeft: 0,
    marginLeft: -2,
    marginTop: '22.5px',
    '&:hover': { backgroundColor: 'transparent' },
}));

export const TopicIcon = styled('img')(() => ({
    width: '8.23px',
    height: '14.48px',
    marginTop: '5px',
}));

export const TopicButton = styled(Button)(() => ({
    padding: 0,
    color: '#000000',
    textTransform: 'none',
}));

export const NavTypo = styled(Typography)(() => ({
    fontSize: '12px',
    fontWeight: '600',
    color: '#8E8F94',
    lineHeight: '15px',
    cursor: 'pointer',
    '&:hover': {
        textDecoration: 'underline',
    },
}));
