import React, { useState } from 'react';
import { Typography, Stack, Button, Box, TextField } from '@mui/material';
import { OuterContainer } from '../styledComponents/GlobalStyledComp';
const InputLabel = {
    fontWeight: 600,
    fontSize: '15px',
    lineHeight: '18px',
    mb: '11px',
};

const TextFieldStyled = {
    mb: '17px',
};

const Upload = () => {
    const [image, setImage] = useState(null);
    const handleCapture = ({ target }) => {
        const fileReader = new FileReader();
        // const name = target.accept.includes('image') ? 'images' : 'videos';

        fileReader.readAsDataURL(target.files[0]);
        fileReader.onload = (e) => {
            // this.setState((prevState) => ({
            //     [name]: [...prevState[name], e.target.result],
            // }));
            setImage(e.target);
        };
    };
    console.log('imageimage', image);
    return (
        <Box sx={OuterContainer}>
            <Box
                sx={{
                    m: { xs: '0 auto', md: '36px auto' },
                    maxWidth: {
                        xs: '100%',
                        sm: '540px',
                        md: '720px',
                        lg: '960px',
                        xl: '1140px',
                    },
                    border: ' 1px solid #ebebeb',
                    borderRadius: '10px',
                    padding: '51px 55px',
                }}
            >
                <Typography sx={{ fontWeight: 700, fontSize: '20px' }}>
                    Upload Your Video
                </Typography>
                <Typography
                    sx={{
                        fontWeight: 500,
                        fontSize: '15px',
                        color: '#B0B0B4',
                        mt: '12px',
                    }}
                >
                    Share your video with Bencil community
                </Typography>
                <Stack
                    direction={{ xs: 'column', md: 'row' }}
                    marginTop="67px"
                    spacing={{ xs: '40px', md: '21px' }}
                >
                    <Box
                        flex="1"
                        sx={{
                            border: ' 1px dashed #B0B0B4',
                            borderRadius: ' 15px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            textAlign: 'center',
                            padding: '22px',
                        }}
                    >
                        <Box>
                            <Button variant="contained" component="label">
                                Select Video
                                <input
                                    hidden
                                    accept="video/*"
                                    multiple
                                    type="file"
                                    // onChange={handleCapture}
                                />
                            </Button>
                            <Typography
                                sx={{
                                    fontWeight: 400,
                                    fontSize: '15px',
                                    mt: '32px',
                                }}
                            >
                                Only vidoes shot with Mobile with 9:16 Aspect
                                ratio
                            </Typography>
                        </Box>
                    </Box>
                    <Box flex="2.7">
                        <Typography sx={InputLabel}>Title</Typography>
                        <TextField
                            fullWidth
                            id="outlined-basic"
                            variant="outlined"
                            sx={TextFieldStyled}
                        />
                        <Typography sx={InputLabel}>Thumbnail</Typography>
                        <Button
                            variant="outlined"
                            component="label"
                            sx={{
                                p: '13px 9px',
                                mb: '17px',
                                fontWeight: 700,
                                fontSize: '15px',
                            }}
                        >
                            select photo
                            <input
                                hidden
                                accept="image/*"
                                multiple
                                type="file"
                                onChange={handleCapture}
                            />
                        </Button>
                        <Typography sx={InputLabel}>Topic</Typography>
                        <TextField
                            fullWidth
                            id="outlined-basic"
                            variant="outlined"
                            sx={TextFieldStyled}
                        />
                        <Typography sx={InputLabel}>Tag</Typography>
                        <TextField
                            fullWidth
                            id="outlined-basic"
                            variant="outlined"
                            sx={TextFieldStyled}
                        />
                    </Box>
                </Stack>
            </Box>
        </Box>
    );
};

export default Upload;
