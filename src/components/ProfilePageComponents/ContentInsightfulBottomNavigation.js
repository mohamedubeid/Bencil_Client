import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { theme } from '../../theme';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { BottomNavigationStyle } from '../../styledComponents/ProfileStyledComp';
const ContentInsightfulBottomNavigation = () => {
    const [value, setValue] = React.useState(0);
    console.log(value, 'this is value');

    return (
        <Box>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                sx={{
                    '.MuiBottomNavigation-root': {
                        color: 'red',
                    },
                }}
            >
                <BottomNavigationAction
                    label="Content"
                    sx={{
                        ...BottomNavigationStyle,
                        borderBottom:
                            value === 0
                                ? `2px solid  ${theme.palette.primary.main}`
                                : '2px solid  rgba(0, 0, 0, 0.2)',
                    }}
                />
                <BottomNavigationAction
                    label="Insightful"
                    sx={{
                        ...BottomNavigationStyle,
                        borderBottom:
                            value === 1
                                ? `2px solid  ${theme.palette.primary.main}`
                                : '2px solid  rgba(0, 0, 0, 0.2)',
                    }}
                />
            </BottomNavigation>
            {value === 0 ? (
                <Grid
                    direction="column"
                    container
                    alignItems="center"
                    justifyContent="center"
                    style={{ minHeight: '43vh', textAlign: 'center' }}
                >
                    <Grid item xs="auto">
                        <img
                            src="images/user_1.png"
                            alt="user"
                            width="97px"
                            height="97px"
                        />
                    </Grid>
                    <Grid item xs="auto">
                        <Typography
                            sx={{
                                fontWeight: 600,
                                fontSIze: '20px',
                                lineHeight: '24px',
                                m: '7px',
                            }}
                        >
                            Start sharing your knowledge in Bencil.
                        </Typography>
                        <Typography
                            sx={{
                                fontWeight: 400,
                                fontSize: '15px',
                                lineHeight: '18px',
                                m: '7px',
                            }}
                        >
                            Bencil community is waiting for you.
                        </Typography>
                    </Grid>
                </Grid>
            ) : (
                ''
            )}
        </Box>
    );
};

export default ContentInsightfulBottomNavigation;
