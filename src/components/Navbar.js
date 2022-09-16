import React from 'react';
import {
    AppBar,
    InputBase,
    Button,
    Badge,
    IconButton,
    Divider,
} from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import TelegramIcon from '@mui/icons-material/Telegram';
import SearchIcon from '@mui/icons-material/Search';
import {
    Search,
    StyledToolbar,
    Icons,
    UploadButton,
    UserAvatar,
    Logo,
    LogoImage,
    BadgeStyle,
} from '../styledComponents/NavbarStyledComp.js';

const Navbar = () => {
    const loggedIn = true;
    return (
        <AppBar
            sx={{
                position: { xs: 'static', md: 'sticky' },
            }}
            color="background"
        >
            <StyledToolbar disableGutters>
                <Logo src="images/logo.svg" alt="logo" />
                <LogoImage src="images/logo_image.png" alt="logo_image" />
                <Search>
                    <InputBase
                        sx={{
                            padding: '6px 1rem',
                        }}
                        fullWidth
                        placeholder="Search"
                        inputProps={{ 'aria-label': 'search' }}
                        endAdornment={<SearchIcon sx={{ opacity: '0.4' }} />}
                    />
                </Search>
                <Icons>
                    <UploadButton variant="outlined">Upload</UploadButton>
                    <Button
                        variant="contained"
                        sx={{ display: loggedIn ? 'none' : 'inline' }}
                    >
                        Log in
                    </Button>
                    <Icons sx={{ display: !loggedIn ? 'none' : 'flex' }}>
                        <IconButton
                            onClick={() =>
                                console.log('this is notifications icon button')
                            }
                        >
                            <Badge badgeContent={4} color="primary">
                                <NotificationsIcon
                                    color="action"
                                    sx={BadgeStyle}
                                />
                            </Badge>
                        </IconButton>
                        <IconButton
                            onClick={() =>
                                console.log('this is messages icon button')
                            }
                        >
                            <Badge
                                badgeContent={4}
                                color="primary"
                                sx={{ marginTop: '5px' }}
                            >
                                <TelegramIcon
                                    color="action"
                                    sx={{
                                        width: '28px',
                                        height: '28px',
                                    }}
                                />
                            </Badge>
                        </IconButton>
                        <UserAvatar
                            src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            alt="Mohamed Ubeid"
                        />
                    </Icons>
                </Icons>
            </StyledToolbar>
        </AppBar>
    );
};

export default Navbar;
