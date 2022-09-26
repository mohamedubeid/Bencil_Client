import React from 'react';
import { Box, Grid } from '@mui/material';
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
            <Grid
                container
                alignItems="center"
                justifyContent="center"
                style={{ minHeight: '43vh' }}
            >
                <Grid item xs="auto">
                    <PersonOutlineIcon
                        fontSize="medium"
                        sx={{
                            width: '185px',
                            height: '185px',
                            opacity: '0.5',
                            fontWeight: '300',
                        }}
                    />
                </Grid>
            </Grid>
        </Box>
    );
};

export default ContentInsightfulBottomNavigation;
