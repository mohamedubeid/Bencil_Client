import React from 'react';
import { Stack, Typography } from '@mui/material';
import { FollowStyle } from '../../styledComponents/ProfileStyledComp';
const FollowInfo = () => {
    return (
        <Stack direction="row" mt="25px" spacing="24px" paddingLeft="8px">
            <Typography
                sx={FollowStyle}
                onClick={() => console.log('following')}
            >
                18 Following
            </Typography>
            <Typography
                sx={FollowStyle}
                onClick={() => console.log('Followers')}
            >
                11 Followers
            </Typography>
            <Typography
                sx={FollowStyle}
                onClick={() => console.log('Insightful')}
            >
                21 Insightful
            </Typography>
        </Stack>
    );
};

export default FollowInfo;
