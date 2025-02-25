import { Box, Typography, Stack, Divider } from "@mui/material";
import React, { useState } from "react";
import PostUserInfo from "./PostUserInfo";
import {
    PostFont,
    Image,
    ReactionsButton,
} from "../../styledComponents/HomePageStyledComp";

const ReactionsNumberStyle = {
    color: "#000",
    fontWeight: 400,
    fontSize: "10px",
    lineHeight: "12.19px",
    textAlign: "center",
    mt: "3.5px",
};

const PostComponent = (props) => {
    const { userInfo, text, topic, image } = props.postData;
    const [isInsightful, setInsightful] = useState(false);
    const [isSaved, setSaved] = useState(false);
    return (
        <Box
            sx={{
                display: "block",
                maxWidth: "402px",
                margin: { xs: "auto", lg: "0 30% 0 15%" },
            }}
        >
            <PostUserInfo
                name={userInfo.name}
                userName={userInfo.userName}
                avatar={userInfo.avatar}
            />
            <Box
                margin="10px 0px 10px auto"
                sx={{
                    display: "block",
                    maxWidth: "335px",
                }}
            >
                <Box mb="20px">
                    <Typography
                        sx={{
                            ...PostFont,
                            paddingBottom: "7px",
                            fontWeight: "600",
                        }}
                    >
                        {text}
                    </Typography>
                    <Stack direction="row" spacing="3px">
                        <img
                            src="images/light.svg"
                            alt="tend"
                            width="8.97px"
                            height="15.78px"
                        />
                        <Typography
                            variant="h6"
                            sx={{
                                ...PostFont,
                                fontWeight: "400",
                            }}
                        >
                            {topic}
                        </Typography>
                    </Stack>
                </Box>
                <Box position="relative">
                    <video width="285px" height="507px" preload="auto" controls>
                        <source src={image} type="video/mp4" />
                        Your browser does not support HTML5 video.
                    </video>
                    <Stack
                        position="absolute"
                        direction="column"
                        sx={{
                            right: "5px",
                            top: "37%",
                        }}
                        spacing="30px"
                    >
                        <Box>
                            <ReactionsButton
                                onClick={() => setInsightful(!isInsightful)}
                            >
                                {isInsightful ? (
                                    <img
                                        src="images/insightfull_on.svg"
                                        alt="insightful"
                                        width="29px"
                                        height="40px"
                                    />
                                ) : (
                                    <img
                                        src="images/insightfull_off.svg"
                                        alt="insightful"
                                        width="29px"
                                        height="40px"
                                    />
                                )}
                            </ReactionsButton>
                            <Typography sx={ReactionsNumberStyle}>
                                64
                            </Typography>
                        </Box>
                        <Box>
                            <ReactionsButton
                                onClick={() => console.log("comment")}
                            >
                                <img
                                    src="images/comments.svg"
                                    alt="save"
                                    width="29px"
                                    height="40px"
                                />
                            </ReactionsButton>
                            <Typography sx={ReactionsNumberStyle}>
                                64
                            </Typography>
                        </Box>
                        <Box>
                            <ReactionsButton
                                onClick={() => console.log("share")}
                            >
                                <img
                                    src="images/share.svg"
                                    alt="save"
                                    width="29px"
                                    height="40px"
                                />
                            </ReactionsButton>
                            <Typography sx={ReactionsNumberStyle}>
                                share
                            </Typography>
                        </Box>
                        <Box>
                            <ReactionsButton onClick={() => setSaved(!isSaved)}>
                                {isSaved ? (
                                    <img
                                        src="images/save_on.svg"
                                        alt="save"
                                        width="29px"
                                        height="40px"
                                    />
                                ) : (
                                    <img
                                        src="images/save_off.svg"
                                        alt="save"
                                        width="29px"
                                        height="40px"
                                    />
                                )}
                            </ReactionsButton>
                            <Typography sx={ReactionsNumberStyle}>
                                save
                            </Typography>
                        </Box>
                    </Stack>
                </Box>
            </Box>
            <Divider
                sx={{
                    m: "50px auto",
                    width: "100%",
                    color: "rgba(0, 0, 0, 0.2)",
                }}
            />
        </Box>
    );
};

export default PostComponent;
