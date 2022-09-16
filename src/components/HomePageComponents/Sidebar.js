import { Box, Typography, Stack, Divider } from '@mui/material';
import React, { useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { theme } from '../../theme';
import CreatorSection from './SidebarCreatorSection';
import { TypoStyle } from '../../styledComponents/SidebarStyledComp';
import SidebarTopicsSections from './SidebarTopicsSections';
import Footer from '../Footer';

const Sidebar = () => {
    const [page, setPage] = useState('related');
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
                <Stack direction="column" spacing="41px">
                    <Stack
                        direction="row"
                        spacing={'5px'}
                        color={
                            page === 'related'
                                ? theme.palette.primary.main
                                : theme.palette.primary.light
                        }
                        sx={{
                            cursor: 'pointer',
                        }}
                        onClick={() => setPage('related')}
                    >
                        <FavoriteIcon sx={{ fontSize: '30px' }} />
                        <Typography variant="h6" sx={TypoStyle}>
                            Related
                        </Typography>
                    </Stack>
                    <Stack
                        direction="row"
                        spacing={'5px'}
                        sx={{
                            color: page === 'network' ? '#000' : '#000000cd',
                            cursor: 'pointer',
                        }}
                        onClick={() => setPage('network')}
                    >
                        <PeopleAltIcon sx={{ fontSize: '30px' }} />
                        <Typography variant="h6" sx={TypoStyle}>
                            Network
                        </Typography>
                    </Stack>
                </Stack>
            </Box>
            <Divider />
            <CreatorSection creatorsList={creatorsList} />
            <Divider />
            <SidebarTopicsSections trendingTopics={trendingTopics} />
            <Divider />
            <Box sx={{ display: 'flex', justifyContent: 'start' }}>
                <Footer />
            </Box>
        </Box>
    );
};

export default Sidebar;
