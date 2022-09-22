import { Box, Typography, Stack, Divider } from '@mui/material';
import React, { useState, useContext } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { theme } from '../../theme';
import CreatorSection from './CreatorSection';
import { TypoStyle } from '../../styledComponents/SidebarStyledComp';
import TopicsSections from './TopicsSections';
import Footer from '../Footer';
import SidebarLoginComponent from './LoginComponent';
import authContext from '../../auth-context.js';

const Sidebar = () => {
    const [page, setPage] = useState('related');
    const auth = useContext(authContext);
    const creatorsList = [
        {
            id: 1,
            name: 'Mohamed Ubeid',
            userName: '@mubeid1999',
            avatar: 'images/assets/avatar1.png',
        },
        {
            id: 2,
            name: 'Mohamed Ubeid2',
            userName: '@mubeid19992',
            avatar: 'images/assets/avatar2.png',
        },
        {
            id: 3,
            name: 'Mohamed Ubeid',
            userName: '@mubeid1999',
            avatar: 'images/assets/avatar3.png',
        },
        {
            id: 4,
            name: 'Mohamed Ubeid2',
            userName: '@mubeid19992',
            avatar: 'images/assets/avatar1.png',
        },
    ];
    const trendingTopics = [
        {
            id: 1,
            topic: 'Marketing Channels',
        },
        {
            id: 2,
            topic: 'AI Marketing',
        },
        {
            id: 3,
            topic: 'Marketing Stories',
        },
        {
            id: 4,
            topic: 'Marketing Tools',
        },
        {
            id: 5,
            topic: 'Social Media Marketing',
        },
        {
            id: 6,
            topic: 'Google Ads',
        },
        {
            id: 7,
            topic: 'Marketing 360',
        },
    ];
    return (
        <Box flex={1} sx={{ display: { xs: 'none', md: 'block' } }}>
            <Box sx={{ p: '40px 0px 34px 15px' }}>
                <Stack direction="column" spacing="41px" display="inline-block">
                    <Stack
                        direction="row"
                        spacing={'5px'}
                        color={
                            page === 'related'
                                ? theme.palette.primary.main
                                : '#000'
                        }
                        sx={{
                            cursor: 'pointer',
                        }}
                        onClick={() => setPage('related')}
                    >
                        <FavoriteIcon sx={{ fontSize: '32px' }} />
                        <Typography variant="h6" sx={TypoStyle}>
                            Related
                        </Typography>
                    </Stack>
                    <Stack
                        direction="row"
                        spacing={'5px'}
                        sx={{
                            color:
                                page === 'network'
                                    ? theme.palette.primary.main
                                    : '#000',
                            cursor: 'pointer',
                        }}
                        onClick={() => setPage('network')}
                    >
                        <PeopleAltIcon sx={{ fontSize: '32px' }} />
                        <Typography variant="h6" sx={TypoStyle}>
                            Network
                        </Typography>
                    </Stack>
                </Stack>
            </Box>
            <Divider sx={{ display: auth.status ? 'none' : 'block' }} />
            <SidebarLoginComponent />
            <Divider />
            <CreatorSection creatorsList={creatorsList} />
            <Divider />
            <TopicsSections trendingTopics={trendingTopics} />
            <Divider />
            <Box sx={{ display: 'flex', justifyContent: 'start' }}>
                <Footer />
            </Box>
        </Box>
    );
};

export default Sidebar;
