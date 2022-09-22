import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { TopicButton } from '../../styledComponents/SidebarStyledComp';

const TrendingTopics = (props) => {
    const { topic, icon } = props;
    return (
        <Box sx={{ display: 'inline-block', m: '7px 5px' }}>
            <TopicButton>
                <Stack
                    direction="row"
                    spacing="3px"
                    textAlign="center"
                    sx={{
                        background: '#D9D9D9',
                        p: '1px 10px 1px 7px',
                        borderRadius: '14.2253px',
                    }}
                >
                    {icon}
                    <Typography
                        sx={{ fontSize: '12px', lineHeight: '25.15px' }}
                    >
                        {topic}
                    </Typography>
                </Stack>
            </TopicButton>
        </Box>
    );
};

export default TrendingTopics;
