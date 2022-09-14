import { styled, IconButton, Typography } from '@mui/material';

export const PostFont = {
    fontSize: '13px',
    lineHeight: '15px',
    color: '#000000',
};

export const Image = styled('img')(({ theme }) => ({
    width: '285px',
    height: '507px',
    borderRadius: '10px',
}));

export const ReactionsButton = styled(IconButton)(({ theme }) => ({
    padding: 0,
    margin: 0,
}));

export const Name = styled(Typography)(({ theme }) => ({
    fontWeight: '600',
    fontSize: '15px',
    lineHeight: '18.29px',
}));

export const UserName = styled(Typography)(({ theme }) => ({
    fontWeight: '400',
    fontSize: '15px',
    lineHeight: '18.29px',
}));
