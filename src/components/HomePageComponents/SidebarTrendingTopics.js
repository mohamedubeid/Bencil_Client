import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';

const TrendingTopics = () => {
    return (
        <Box sx={{ display: 'inline-block' }}>
            <Stack
                direction="row"
                spacing="3px"
                textAlign="center"
                sx={{
                    borderRadius: '14.2253px',
                    background: '#D9D9D9',
                    p: '5px 8px 5px 5px',
                }}
            >
                <ElectricBoltIcon
                    sx={{
                        color: '#dddd00',
                        fontSize: '15px',
                    }}
                />
                <Typography sx={{ fontSize: '12px' }}>
                    Marketing Channels
                </Typography>
            </Stack>
        </Box>
    );
};

export default TrendingTopics;
