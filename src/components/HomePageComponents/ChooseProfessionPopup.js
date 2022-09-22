import React from 'react';
import { DialogTitle, Dialog, Typography, Box } from '@mui/material';
import PopupProfessions from './PopupProfessions';
const ChooseProfessionPopup = (props) => {
    const { onClose, open, Topics } = props;
    return (
        <Dialog
            open={open}
            sx={{
                '& .MuiDialog-paper': {
                    borderRadius: '20px',
                    paddingTop: '33px',
                    paddingBottom: '30px',
                    paddingLeft: '41px',
                    width: '427px',
                },
            }}
        >
            <DialogTitle
                sx={{
                    fontWeight: 700,
                    fontSize: '20px',
                    lineHeight: '24.38px',
                    p: 0,
                    m: 0,
                }}
            >
                Choose your profession
            </DialogTitle>
            <Typography
                sx={{
                    fontWeight: 600,
                    fontSize: '12px',
                    paddingLeft: '4px',
                    paddingTop: '14px',
                }}
            >
                Bencil connects you with people just like you.
            </Typography>
            <Box sx={{ marginTop: '21px' }}>
                {Topics.map((topic, i) => {
                    return (
                        <PopupProfessions
                            key={i}
                            topic={topic}
                            onClose={onClose}
                        />
                    );
                })}
            </Box>
            <Typography
                sx={{
                    fontSize: '12px',
                    fontWeight: '700',
                    color: '#000',
                    mt: '35px',
                }}
                component="div"
            >
                You already have an account?
                <Typography
                    sx={{
                        fontSize: '12px',
                        fontWeight: '700',
                        ml: '5px',
                        cursor: 'pointer',
                    }}
                    color="primary"
                    display="inline"
                >
                    Login here.
                </Typography>
            </Typography>
        </Dialog>
    );
};

export default ChooseProfessionPopup;
