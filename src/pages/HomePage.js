import React from 'react';
import Sidebar from '../components/HomePageComponents/Sidebar';
import Content from '../components/HomePageComponents/Content';
import { Stack, Divider } from '@mui/material';
const HomePage = () => {
    return (
        <Stack direction="row">
            <Sidebar />
            <Divider
                orientation="vertical"
                flexItem
                sx={{ display: { xs: 'none', md: 'flex' } }}
            />
            <Content />
        </Stack>
    );
};

export default HomePage;
