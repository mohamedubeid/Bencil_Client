import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Main from '../components/ProfilePageComponents/Main';
import { Stack, Divider } from '@mui/material';
const Profile = () => {
    return (
        <Stack direction="row" spacing="0px">
            <Sidebar />
            <Divider
                orientation="vertical"
                flexItem
                sx={{ display: { xs: 'none', md: 'flex' } }}
            />
            <Main />
        </Stack>
    );
};

export default Profile;
