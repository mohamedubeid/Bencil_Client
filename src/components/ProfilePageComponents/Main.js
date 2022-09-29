import React from 'react';
import { Box } from '@mui/material';
import { MainStyled } from '../../styledComponents/GlobalStyledComp';
import ContentInsightfulBottomNavigation from './ContentInsightfulBottomNavigation';
import ProfileUserInfo from './ProfileUserInfo';

const Main = () => {
    return (
        <Box flex="auto" sx={MainStyled}>
            <Box
                p={{ xs: '26px 10px', md: '26px 10px 10px 55px' }}
                sx={{
                    width: {
                        xs: '95%',
                        sm: '540px',
                        md: '512px',
                        lg: '682px',
                        xl: '810px',
                    },
                }}
                margin={{ xs: 'auto', md: '0' }}
            >
                <ProfileUserInfo />
                <ContentInsightfulBottomNavigation />
            </Box>
        </Box>
    );
};

export default Main;
