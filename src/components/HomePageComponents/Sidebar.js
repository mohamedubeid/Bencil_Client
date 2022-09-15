import { Box, Typography, Stack, Divider, Grid } from '@mui/material';
import React, { useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { theme } from '../../theme';
import TrendingTopics from './SidebarTrendingTopics';
import CreatorSection from './SidebarCreatorSection';
import {
    TypoStyle,
    SideBarTitle,
    SeeAllButton,
    TopicIcon,
} from '../../styledComponents/SidebarStyledComp';
import AddIcon from '@mui/icons-material/Add';

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
            <Box p="22px 10px 5px 0px">
                <SideBarTitle>Trending Topics</SideBarTitle>
                <Grid container mt="19px" ml="-5px">
                    <TrendingTopics
                        topic={'Marketing Channels'}
                        icon={
                            <TopicIcon
                                src="images/trending_topic.png"
                                alt="trending_topic"
                            />
                        }
                    />
                    <TrendingTopics
                        topic={'AI Marketing'}
                        icon={
                            <TopicIcon
                                src="images/trending_topic.png"
                                alt="trending_topic"
                            />
                        }
                    />
                    <TrendingTopics
                        topic={'Marketing Stories'}
                        icon={
                            <TopicIcon
                                src="images/trending_topic.png"
                                alt="trending_topic"
                            />
                        }
                    />
                    <TrendingTopics
                        topic={'Marketing Tools'}
                        icon={
                            <TopicIcon
                                src="images/trending_topic.png"
                                alt="trending_topic"
                            />
                        }
                    />
                    <TrendingTopics
                        topic={'Marketing 360'}
                        icon={
                            <TopicIcon
                                src="images/trending_topic.png"
                                alt="trending_topic"
                            />
                        }
                    />
                    <TrendingTopics
                        topic={'Soical Media Marketing'}
                        icon={
                            <TopicIcon
                                src="images/trending_topic.png"
                                alt="trending_topic"
                            />
                        }
                    />
                    <TrendingTopics
                        topic={'Marketing Tips'}
                        icon={
                            <TopicIcon
                                src="images/trending_topic.png"
                                alt="trending_topic"
                            />
                        }
                    />
                    <TrendingTopics
                        topic={'Google Ads'}
                        icon={
                            <TopicIcon
                                src="images/trending_topic.png"
                                alt="trending_topic"
                            />
                        }
                    />
                </Grid>
                <Box ml="-5px" mt="14px">
                    <TrendingTopics
                        topic={'New Topic'}
                        icon={<AddIcon color="primary" />}
                    />
                </Box>
                <Box>
                    <SeeAllButton
                        variant="text"
                        onClick={() => console.log('see all')}
                    >
                        See All
                    </SeeAllButton>
                </Box>
            </Box>
        </Box>
    );
};

export default Sidebar;
