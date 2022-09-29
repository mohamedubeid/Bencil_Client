import React from 'react';
import { Avatar, Stack, Button } from '@mui/material';
import { theme } from '../../theme';
import DoneIcon from '@mui/icons-material/Done';
import { Name, UserName } from '../../styledComponents/HomePageStyledComp';

const PostUserInfo = (props) => {
    return (
        <Stack
            direction="row"
            alignItems="center"
            spacing={{ xs: '4%', lg: '40px', xl: '13%' }}
        >
            <Stack
                direction="row"
                alignItems="center"
                spacing={{ xs: 1, sm: 1.5 }}
            >
                <Avatar
                    sx={{
                        width: { xs: '50px', md: '54.5px' },
                        height: { xs: '50px', md: '54.5px' },
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
