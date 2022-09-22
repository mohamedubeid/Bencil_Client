import React from 'react';
import { Typography, Box } from '@mui/material';
import { TopicButton } from '../../styledComponents/SidebarStyledComp';

const PopupProfessions = (props) => {
    const { topic, onClose } = props;
    return (
        <Box sx={{ marginTop: '10px', display: 'block' }}>
            <TopicButton
                sx={{ borderRadius: '18px' }}
                onClick={() => onClose(topic)}
            >
                <Typography
                    sx={{
                        fontSize: '16px',
                        lineHeight: '25.15px',
                        fontWeight: '700',
                        background: '#D9D9D9',
                        padding: '8px 32px',
                        borderRadius: '18px',
                    }}
                >
                    {topic}
                </Typography>
            </TopicButton>
        </Box>
    );
};

export default PopupProfessions;
