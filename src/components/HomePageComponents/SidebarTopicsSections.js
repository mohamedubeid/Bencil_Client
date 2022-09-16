import { Box, Grid } from '@mui/material';
import React from 'react';
import TrendingTopics from './SidebarTrendingTopics';
import {
    SideBarTitle,
    SeeAllButton,
    TopicIcon,
} from '../../styledComponents/SidebarStyledComp';
import AddIcon from '@mui/icons-material/Add';

const SidebarTopicsSections = ({ trendingTopics }) => {
    return (
        <Box p="22px 10px 52px 0px">
            <SideBarTitle>Trending Topics</SideBarTitle>
            <Grid container mt="19px" ml="-5px">
                {trendingTopics.map((trendingTopic) => {
                    return (
                        <TrendingTopics
                            key={trendingTopic.id}
                            topic={trendingTopic.topic}
                            icon={
                                <TopicIcon
                                    src="images/light.svg"
                                    alt="trending_topic"
                                />
                            }
                        />
                    );
                })}
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
    );
};

export default SidebarTopicsSections;
