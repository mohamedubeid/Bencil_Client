import React from 'react';
import { Box } from '@mui/material';
import { MainStyled } from '../../styledComponents/GlobalStyledComp';
import ContentInsightfulBottomNavigation from './ContentInsightfulBottomNavigation';
import ProfileUserInfo from './ProfileUserInfo';

const Main = () => {
    return (
        <Box flex={1.7} p="23px 10px 10px 30px" sx={MainStyled}>
            <ProfileUserInfo />
            <ContentInsightfulBottomNavigation />
        </Box>
    );
};

export default Main;
