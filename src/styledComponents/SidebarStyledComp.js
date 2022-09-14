import { styled, Typography } from '@mui/material';

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
