import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Main from '../components/HomePageComponents/Main';
import { Stack, Divider } from '@mui/material';
const HomePage = () => {
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

export default HomePage;
