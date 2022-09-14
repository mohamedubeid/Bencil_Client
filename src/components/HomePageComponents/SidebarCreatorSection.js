import { Box, Stack, Button } from '@mui/material';
import React from 'react';
import CreatorInfo from './SidebarCreatorInfo';
import { SideBarTitle } from '../../styledComponents/SidebarStyledComp';

const CreatorSection = (props) => {
    const { creatorsList } = props;
    return (
        <Box pt="22px" pb="37px">
            <SideBarTitle>Creators in your field (Marketer)</SideBarTitle>
            <Stack sx={{ pt: '26px' }} spacing="25px">
                {creatorsList.map((creator) => {
                    return (
                        <CreatorInfo creatorInfo={creator} key={creator.id} />
                    );
                })}
            </Stack>
            <Button
                variant="text"
                sx={{
                    textTransform: 'none',
                    mt: '22.5px',
                    '&:hover': { backgroundColor: 'transparent' },
                }}
                onClick={() => console.log('see all')}
            >
                See All
            </Button>
        </Box>
    );
};

export default CreatorSection;
