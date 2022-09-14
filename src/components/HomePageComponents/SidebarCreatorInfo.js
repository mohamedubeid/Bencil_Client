import { Stack, Avatar } from '@mui/material';
import React from 'react';
import { Name, UserName } from '../../styledComponents/SidebarStyledComp';

const CreatorInfo = (props) => {
    const { name, userName, avatar } = props.creatorInfo;
    return (
        <Stack
            direction="row"
            alignItems="center"
            spacing={'5px'}
            sx={{ cursor: 'pointer' }}
            onClick={() => console.log('creators', name)}
        >
            <Avatar
                sx={{
                    width: '35px',
                    height: '35px',
                }}
                alt={name}
                src={avatar}
            />
            <Stack direction="column">
                <Stack
                    direction="row"
                    alignItems="center"
                    spacing="5px"
                    marginBottom="4px"
                >
                    <Name variant="subtitle">{name}</Name>
                </Stack>
                <UserName>{userName}</UserName>
            </Stack>
        </Stack>
    );
};

export default CreatorInfo;
