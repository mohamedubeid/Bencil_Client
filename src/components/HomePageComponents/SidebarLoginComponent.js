import { Box, Typography, Button } from '@mui/material';
import React, { useContext } from 'react';

import authContext from '../../auth-context.js';

const SidebarLoginComponent = () => {
    const auth = useContext(authContext);

    return (
        <Box
            pt="26.5px"
            pb="41px"
            pr="31px"
            sx={{ display: auth.status ? 'none' : 'block' }}
        >
            <Typography
                variant="text"
                sx={{
                    fontWeight: 400,
                    fontSize: '15px',
                    lineHeight: '18.29px',
                    color: '#8E8F94',
                }}
            >
                Log in to save videos, comment, grow Your network, and more.
            </Typography>
            <Button
                variant="outlined"
                fullWidth
                sx={{
                    fontSize: '20px',
                    fontWeight: '700',
                    display: 'block',
                    pt: '13px',
                    pb: '14px',
                    mt: '14px',
                    border: '2px solid #0A66C2',
                    '&:hover': {
                        border: '2px solid #0A66C2',
                    },
                }}
                onClick={auth.login}
            >
                Log in
            </Button>
        </Box>
    );
};

export default SidebarLoginComponent;
