import { Box, Typography, Stack, Divider } from '@mui/material';
import React, { useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { theme } from '../../theme';
import TrendingTopics from './SidebarTrendingTopics';
import CreatorSection from './SidebarCreatorSection';
import {
    TypoStyle,
    SideBarTitle,
} from '../../styledComponents/SidebarStyledComp';

const Sidebar = () => {
    const [page, setPage] = useState('related');
    const creatorsList = [
        {
            id: 1,
            name: 'Mohamed Ubeid',
            userName: '@mubeid1999',
            avatar: '/images/avatar1.png',
        },
        {
            id: 2,
            name: 'Mohamed Ubeid2',
            userName: '@mubeid19992',
            avatar: '/images/avatar3.png',
        },
        {
            id: 3,
            name: 'Mohamed Ubeid',
            userName: '@mubeid1999',
            avatar: '/images/avatar1.png',
        },
        {
            id: 4,
            name: 'Mohamed Ubeid2',
            userName: '@mubeid19992',
            avatar: '/images/avatar3.png',
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
                            color: page === 'network' ? '#000' : '#00000099',
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
            <Box pt="22px" pb="20px">
                <SideBarTitle>Trending Topics</SideBarTitle>
                <TrendingTopics />
            </Box>
        </Box>
    );
};

export default Sidebar;
