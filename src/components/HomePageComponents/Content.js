import { Box, Typography, Stack } from '@mui/material';
import React, { useState } from 'react';
import Footer from '../Footer';
import PostComponent from './ContentPostComponent';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { theme } from '../../theme';
import { TypoStyle } from '../../styledComponents/SidebarStyledComp';
const Content = () => {
    const [page, setPage] = useState('related');

    const ListOfPosts = [
        {
            userInfo: {
                name: 'Mohamed Ubeid',
                userName: '@mubeid1999',
                avatar: 'https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            },
            id: 1,
            text: ' is traditional marketing still effective in 2022?',
            topic: 'Marketing Channels',
            image: 'images/assets/test_v1.png',
        },
        {
            userInfo: {
                name: 'Jason Wardrop',
                userName: '@jeson102',
                avatar: 'images/assets/avatar2.png',
            },
            id: 2,
            text: ' How to get the best CPC in google ads!',
            topic: 'Google Ads',
            image: 'images/assets/test_v2.png',
        },
    ];
    return (
        <Box flex={2.1} pt={'45px'}>
            <Stack
                direction="row"
                spacing="8%"
                justifyContent="center"
                mb={5}
                display={{ xs: 'flex', md: 'none' }}
            >
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
                    <PeopleAltIcon sx={{ fontSize: '30px' }} />
                    <Typography variant="h6" sx={TypoStyle}>
                        Network
                    </Typography>
                </Stack>
                <Stack
                    direction="row"
                    spacing={'5px'}
                    color={
                        page === 'related' ? theme.palette.primary.main : '#000'
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
            </Stack>
            <Box>
                {ListOfPosts.map((post) => {
                    return <PostComponent postData={post} key={post.id} />;
                })}
            </Box>
            <Box p={2} display={{ xs: 'block', md: 'none' }}>
                <Footer />
            </Box>
        </Box>
    );
};

export default Content;
