import { Box, Typography, Stack, Divider } from '@mui/material';
import React, { useState } from 'react';
import { theme } from '../../theme';
import PostUserInfo from './ContentPostUserInfo';
import TextsmsIcon from '@mui/icons-material/Textsms';
import { TbBulb } from 'react-icons/tb';
import { FaShare } from 'react-icons/fa';
import { IoAddCircleSharp } from 'react-icons/io5';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import {
    PostFont,
    Image,
    ReactionsButton,
} from '../../styledComponents/ContentStyledComp';

const PostComponent = (props) => {
    const [isInsightFull, setInsightFull] = useState(false);
    const { userInfo, text, topic, image } = props.postData;

    return (
        <Box
            sx={{
                display: 'block',
                maxWidth: '402px',
                margin: { xs: 'auto', md: '0 30% 0 15%' },
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
                        <ElectricBoltIcon
                            sx={{
                                color: '#dddd00',
                                // marginRight: '2px',
                                fontSize: '15px',
                            }}
                        />
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
                        sx={{ right: '0px', top: '50%' }}
                        spacing="30px"
                    >
                        <ReactionsButton
                            sx={{
                                fontSize: '45px',
                                color: isInsightFull
                                    ? theme.palette.secondary.dark
                                    : theme.palette.primary.light,
                            }}
                            onClick={() => setInsightFull(!isInsightFull)}
                        >
                            <TbBulb />
                        </ReactionsButton>
                        <ReactionsButton>
                            <TextsmsIcon
                                sx={{
                                    fontSize: '30px',
                                    color: theme.palette.secondary.dark,
                                }}
                            />
                        </ReactionsButton>
                        <ReactionsButton
                            sx={{
                                fontSize: '30px',
                                color: theme.palette.secondary.dark,
                            }}
                        >
                            <FaShare />
                        </ReactionsButton>
                        <ReactionsButton
                            sx={{
                                fontSize: '35px',
                                color: theme.palette.secondary.dark,
                            }}
                        >
                            <IoAddCircleSharp />
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
