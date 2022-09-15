import { styled, Typography, Button } from '@mui/material';

export const TypoStyle = {
    fontSIze: '20px',
    fontWeight: '700',
    lineHeight: '30px',
};

export const SideBarTitle = styled(Typography)(({ theme }) => ({
    fontWeight: '700',
    fontSize: '15px',
}));

export const Name = styled(Typography)(({ theme }) => ({
    fontWeight: '600',
    fontSize: '12px',
    lineHeight: '14.63px',
}));

export const UserName = styled(Typography)(({ theme }) => ({
    fontWeight: '400',
    fontSize: '12px',
    lineHeight: '14.63px',
}));

export const SeeAllButton = styled(Button)(({ theme }) => ({
    textTransform: 'none',
    fontWeight: '600',
    fontSize: '12px',
    marginTop: '22.5px',
    '&:hover': { backgroundColor: 'transparent' },
}));

export const TopicIcon = styled('img')(({ theme }) => ({
    width: '8.23px',
    height: '14.23px',
    marginTop: '5px',
}));

export const TopicButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#00000066',
    padding: 0,
    color: '#000000',
}));
