import React from 'react';
import Sidebar from '../components/HomePageComponents/Sidebar';
import Content from '../components/HomePageComponents/Content';
import { Stack } from '@mui/material';
const HomePage = () => {
    return (
        <Stack direction="row">
            <Sidebar />
            <Content />
        </Stack>
    );
};

export default HomePage;
