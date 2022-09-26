import React from 'react';
import { Box, Stack, Avatar, Typography, Button } from '@mui/material';
import { theme } from '../../theme';
import { ProfileButtonStyle } from '../../styledComponents/ProfileStyledComp';
import FollowInfo from './FollowInfo';
const ProfileUserInfo = () => {
    return (
        <Box>
            <Stack
                direction="row"
                justifyContent="start"
                alignItems="end"
                spacing="10px"
            >
                <Avatar
                    sx={{
                        width: '116px',
                        height: '116px',
                        border: `1px solid ${theme.palette.primary.main}`,
                        mr: '21px',
                    }}
                    alt="Mohamed Ubeid"
                    src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                />
                <Stack sx={{ mt: 'auto' }} spacing="15px">
                    <Box>
                        <Typography
                            mb="5px"
                            sx={{
                                fontWeight: 600,
                                fontSize: '25px',
                                lineHeight: '30px',
                            }}
                        >
                            Emma roy
                        </Typography>
                        <Typography sx={{ fontWeight: 400, fontSize: '15px' }}>
                            @em1200
                        </Typography>
                    </Box>
                    <Button variant="outlined" sx={ProfileButtonStyle}>
                        Edit Profile
                    </Button>
                </Stack>
                <Button variant="outlined" sx={ProfileButtonStyle}>
                    Share Profile
                </Button>
            </Stack>
            <FollowInfo />
            <Typography
                sx={{ fontWeight: 400, fontSize: '15px' }}
                paddingLeft="8px"
                marginTop="18px"
            >
                No Bio.
            </Typography>
        </Box>
    );
};

export default ProfileUserInfo;
