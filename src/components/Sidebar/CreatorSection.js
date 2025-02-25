import { Box, Stack } from '@mui/material';
import React from 'react';
import CreatorInfo from './CreatorInfo';
import {
    SideBarTitle,
    SeeAllButton,
} from '../../styledComponents/SidebarStyledComp';

const CreatorSection = (props) => {
    const { creatorsList } = props;
    return (
        <Box pt="22px" pb="37px">
            <SideBarTitle>Creators in your field (Marketer)</SideBarTitle>
            <Stack sx={{ pt: '26px' }} spacing="25px" display="inline-block">
                {creatorsList.map((creator) => {
                    return (
                        <CreatorInfo creatorInfo={creator} key={creator.id} />
                    );
                })}
            </Stack>
            <SeeAllButton
                disableRipple
                variant="text"
                onClick={() => console.log('see all')}
            >
                See All
            </SeeAllButton>
        </Box>
    );
};

export default CreatorSection;
