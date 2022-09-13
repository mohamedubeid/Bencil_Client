import React from 'react';
import { Avatar, Stack, Typography, styled, Button } from '@mui/material';
import { theme } from '../../theme';
import DoneIcon from '@mui/icons-material/Done';

const Name = styled(Typography)(({ theme }) => ({
    fontWeight: '600',
    fontSize: '15px',
    lineHeight: '18.29px',
}));

const UserName = styled(Typography)(({ theme }) => ({
    fontWeight: '400',
    fontSize: '15px',
    lineHeight: '18.29px',
    borderRadius: '5px',
}));

const PostUserInfo = (props) => {
    return (
        <Stack direction="row" alignItems="center" spacing={'55.5px'}>
            <Stack direction="row" alignItems="center" spacing={1.5}>
                <Avatar
                    sx={{
                        width: '54.5px',
                        height: '54.5px',
                    }}
                    alt="Mohamed Ubeid"
                    src={`${props.avatar}`}
                />
                <Stack direction="column">
                    <Stack
                        direction="row"
                        alignItems="center"
                        spacing="5px"
                        marginBottom="4px"
                    >
                        <Name variant="subtitle">{props.name}</Name>
                        <DoneIcon
                            sx={{
                                width: '11.77px',
                                height: '11.77px',
                                backgroundColor: theme.palette.primary.main,
                                borderRadius: '50%',
                                color: 'white',
                            }}
                        />
                    </Stack>
                    <UserName>{props.userName}</UserName>
                </Stack>
            </Stack>
            <Button
                sx={{ paddingLeft: '22px', paddingRight: '22px' }}
                variant="outlined"
            >
                Follow
            </Button>
        </Stack>
    );
};

export default PostUserInfo;
