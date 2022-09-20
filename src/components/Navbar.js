import React, { useContext } from 'react';
import {
    AppBar,
    InputBase,
    Button,
    Badge,
    IconButton,
    Stack,
    Box,
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
import authContext from '../auth-context.js';
import { theme } from '../theme.js';
import AccountMenu from './HomePageComponents/AccountMenu.js';

const Navbar = () => {
    const auth = useContext(authContext);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <AppBar
            sx={{
                position: { xs: 'static', md: 'sticky' },
                paddingRight: '0px!important',
                maxWidth: {
                    xs: '95%',
                    sm: '540px',
                    md: '720px',
                    lg: '960px',
                    xl: '1140px',
                },
                m: 'auto',
                p: 0,
            }}
            color="background"
        >
            <StyledToolbar disableGutters>
                <Logo src="images/logo.svg" alt="logo" />
                <Box
                    sx={{
                        marginRight: { xs: '5px', md: '0' },
                        display: { xs: 'flex', md: 'none' },
                    }}
                >
                    <LogoImage src="images/logo_image.png" alt="logo_image" />
                </Box>
                <Search
                    sx={{
                        marginRight: { xs: 'auto', md: '0' },
                        width: { xs: '38%', md: '29%' },
                    }}
                >
                    <InputBase
                        sx={{
                            padding: '8px 1rem',
                            fontSize: '13px',
                            fontWeight: '400',
                            color: '#000',
                        }}
                        fullWidth
                        placeholder="Search"
                        inputProps={{ 'aria-label': 'search' }}
                        endAdornment={<SearchIcon sx={{ opacity: '0.4' }} />}
                    />
                </Search>
                <Icons>
                    <Stack direction="row" spacing={{ xs: '10px', md: '20px' }}>
                        <UploadButton variant="outlined">Upload</UploadButton>
                        <Button
                            variant="contained"
                            sx={{
                                display: auth.status ? 'none' : 'inline',
                                [theme.breakpoints.down('sm')]: {
                                    padding: '8px 18px',
                                    fontWeight: 600,
                                    fontSize: '12px',
                                },
                            }}
                            onClick={auth.login}
                        >
                            Login
                        </Button>
                    </Stack>
                    <Icons sx={{ display: !auth.status ? 'none' : 'flex' }}>
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
                        <IconButton onClick={handleClick}>
                            <UserAvatar
                                src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                alt="Mohamed Ubeid"
                            />
                        </IconButton>
                    </Icons>
                </Icons>
            </StyledToolbar>
            <AccountMenu anchorEl={anchorEl} handleClose={handleClose} />
        </AppBar>
    );
};

export default Navbar;
