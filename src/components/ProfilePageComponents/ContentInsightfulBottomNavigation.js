import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { theme } from '../../theme';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
const BottomNavigationStyle = {
    '.MuiBottomNavigationAction-label': {
        fontWeight: 600,
        fontSize: '15px',
        lineHeight: '18px',
        color: '#000000',
    },
    '.Mui-selected': {
        color: theme.palette.primary.main,
        fontWeight: 600,
        fontSize: '15px',
        lineHeight: '18px',
    },
    paddingLeft: '120px',
    paddingRight: '120px',
    paddingTop: '0px',
    marginTop: '9px',
    borderBottom: '2px solid  rgba(0, 0, 0, 0.2)',
};

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
                        <PersonOutlineIcon
                            fontSize="medium"
                            sx={{
                                width: { xs: '150px', sm: '185px' },
                                height: { xs: '150px', sm: '185px' },
                                opacity: '0.5',
                                fontWeight: '300',
                            }}
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
                            Start sharing your knowledge in Bencil
                        </Typography>
                        <Typography
                            sx={{
                                fontWeight: 400,
                                fontSize: '15px',
                                lineHeight: '18px',
                                m: '7px',
                            }}
                        >
                            Bencil community is waiting for you
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
