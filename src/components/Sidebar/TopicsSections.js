import { Box } from '@mui/material';
import React from 'react';
import TrendingTopics from './TrendingTopics';
import {
    SideBarTitle,
    SeeAllButton,
    TopicIcon,
} from '../../styledComponents/SidebarStyledComp';

const TopicsSections = ({ trendingTopics }) => {
    return (
        <Box p="22px 10px 52px 0px">
            <SideBarTitle>Trending Topics</SideBarTitle>
            <Box mt="19px" ml="-5px">
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
            </Box>
            <Box>
                <SeeAllButton
                    disableRipple
                    variant="text"
                    onClick={() => console.log('see all')}
                >
                    See All
                </SeeAllButton>
            </Box>
        </Box>
    );
};

export default TopicsSections;
