import { Box } from '@mui/material';
import React from 'react';
import { theme } from '../../theme';
import PostComponent from './ContentPostComponent';

const Content = () => {
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
            image: 'images/test_v1.png',
        },
        {
            userInfo: {
                name: 'Jason Wardrop',
                userName: '@jeson102',
                avatar: 'images/avatar2.png',
            },
            id: 2,
            text: ' How to get the best CPC in google ads!',
            topic: 'Google Ads',
            image: 'images/test_v2.png',
        },
    ];
    return (
        <Box
            flex={2.1}
            pt={'45px'}
            sx={{ backgroundColor: theme.palette.background.light }}
        >
            {ListOfPosts.map((post) => {
                return <PostComponent postData={post} key={post.id} />;
            })}
        </Box>
    );
};

export default Content;
