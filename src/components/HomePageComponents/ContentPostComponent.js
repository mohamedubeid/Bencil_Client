import { Box, Typography, Stack, Divider } from '@mui/material';
import React, { useState } from 'react';
import PostUserInfo from './ContentPostUserInfo';
import {
    PostFont,
    Image,
    ReactionsButton,
} from '../../styledComponents/ContentStyledComp';

const PostComponent = (props) => {
    const { userInfo, text, topic, image } = props.postData;
    const [isInsightful, setInsightful] = useState(false);
    const [isSaved, setSaved] = useState(false);
    return (
        <Box
            sx={{
                display: 'block',
                maxWidth: '402px',
                margin: { xs: 'auto', lg: '0 30% 0 15%' },
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
                    display: 'block',
                    maxWidth: '335px',
                }}
            >
                <Box mb="20px">
                    <Typography
                        sx={{
                            ...PostFont,
                            paddingBottom: '7px',
                            fontWeight: '600',
                        }}
                    >
                        {text}
                    </Typography>
                    <Stack direction="row" spacing="3px">
                        <img src="images/trend.png" alt="tend" />
                        <Typography
                            variant="h6"
                            sx={{
                                ...PostFont,
                                fontWeight: '400',
                            }}
                        >
                            {topic}
                        </Typography>
                    </Stack>
                </Box>
                <Box position="relative">
                    <Image src={image} />
                    <Stack
                        position="absolute"
                        direction="column"
                        sx={{
                            right: '0px',
                            top: '50%',
                        }}
                        spacing="30px"
                    >
                        <ReactionsButton
                            onClick={() => setInsightful(!isInsightful)}
                        >
                            {isInsightful ? (
                                <img
                                    src="images/insightfuled.svg"
                                    alt="insightful"
                                    width="29px"
                                    height="40px"
                                />
                            ) : (
                                <img
                                    src="images/insightful.svg"
                                    alt="insightful"
                                    width="29px"
                                    height="40px"
                                />
                            )}
                        </ReactionsButton>
                        <ReactionsButton onClick={() => console.log('comment')}>
                            <img src="images/comment.svg" alt="comment" />
                        </ReactionsButton>
                        <ReactionsButton onClick={() => console.log('share')}>
                            <img src="images/share.svg" alt="share" />
                        </ReactionsButton>
                        <ReactionsButton onClick={() => setSaved(!isSaved)}>
                            {isSaved ? (
                                <img
                                    src="images/saved.svg"
                                    alt="save"
                                    width="29px"
                                    height="40px"
                                />
                            ) : (
                                <img
                                    src="images/save.svg"
                                    alt="save"
                                    width="29px"
                                    height="40px"
                                />
                            )}
                        </ReactionsButton>
                    </Stack>
                </Box>
            </Box>
            <Divider
                sx={{
                    marginTop: '50px',
                    marginBottom: '50px',
                    width: '420px',
                    color: 'rgba(0, 0, 0, 0.2)',
                    border: '1px solid rgba(0, 0, 0, 0.2)',
                }}
            />
        </Box>
    );
};

export default PostComponent;
