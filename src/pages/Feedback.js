import React, { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import {
    Stack,
    Divider,
    Box,
    Typography,
    TextField,
    IconButton,
    Button,
} from "@mui/material";
import {
    OuterContainer,
    InnerContainer,
} from "../styledComponents/GlobalStyledComp";
import AddIcon from "@mui/icons-material/Add";
import { theme } from "../theme";

const Feedback = () => {
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
    return (
        <Stack direction="row" spacing="0px">
            <Box
                flex="auto"
                justifySelf="start"
                sx={{
                    backgroundColor: "white",
                    display: { xs: "none", md: "block" },
                }}
            ></Box>
            <Sidebar />
            <Divider
                orientation="vertical"
                flexItem
                sx={{ display: { xs: "none", md: "flex" } }}
            />
            <Box flex="auto" sx={OuterContainer}>
                <Box sx={InnerContainer}>
                    <Box sx={{ mt: "55px", ml: "97px" }}>
                        <Typography
                            sx={{
                                fontWeight: 600,
                                fontSize: "25px",
                                lineHeight: "30px",
                            }}
                        >
                            Feedback and Help
                        </Typography>
                        <Typography
                            sx={{
                                fontWeight: 400,
                                fontSize: "15px",
                                lineHeight: "18px",
                                mt: "16px",
                            }}
                        >
                            Tell us anything you have in mind about Bencil
                        </Typography>
                        <Box
                            sx={{
                                mt: "62px",
                                padding: "48px",
                                border: "1px solid #00000033",
                            }}
                        >
                            <Typography
                                sx={{
                                    fontWeight: 600,
                                    fontSize: "20px",
                                    lineHeight: "24px",
                                }}
                            >
                                Your Feedback
                            </Typography>
                            <TextField
                                id="outlined-multiline-static"
                                multiline
                                rows={6}
                                fullWidth
                                sx={{ mt: "26px" }}
                            />
                            <Box sx={{ mt: "28px", mb: "33px" }}>
                                <Typography
                                    sx={{
                                        fontWeight: 600,
                                        fontSize: "20px",
                                        lineHeight: "24px",
                                    }}
                                >
                                    Upload a photo
                                </Typography>

                                <IconButton
                                    color="primary"
                                    aria-label="upload picture"
                                    component="label"
                                    display="block"
                                >
                                    <input
                                        hidden
                                        accept="image/*"
                                        type="file"
                                        onChange={handleCapture}
                                    />
                                    <AddIcon
                                        sx={{
                                            height: "60px",
                                            width: "60px",
                                            color: theme.palette.primary.main,
                                        }}
                                    />
                                </IconButton>
                            </Box>
                            <Button variant="contained" color="secondary">
                                Submit
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Stack>
    );
};

export default Feedback;
