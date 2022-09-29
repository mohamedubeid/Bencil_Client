import React from 'react';
import { Box } from '@mui/material';
import {
    OuterContainer,
    InnerContainer,
} from '../../styledComponents/GlobalStyledComp';
import ContentInsightfulBottomNavigation from './ContentInsightfulBottomNavigation';
import ProfileUserInfo from './ProfileUserInfo';

const Main = () => {
    return (
        <Box flex="auto" sx={OuterContainer}>
            <Box
                p={{ xs: '26px 10px', md: '26px 10px 10px 55px' }}
                sx={InnerContainer}
            >
                <ProfileUserInfo />
                <ContentInsightfulBottomNavigation />
            </Box>
        </Box>
    );
};

export default Main;
