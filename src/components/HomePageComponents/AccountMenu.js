import React from 'react';
import Menu from '@mui/material/Menu';
import Divider from '@mui/material/Divider';
import { MenuItemStyled } from '../../styledComponents/NavbarStyledComp.js';

const AccountMenu = ({ anchorEl, handleClose }) => {
    const open = Boolean(anchorEl);

    return (
        <Menu
            sx={{ mt: 0.5 }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
                elevation: 0,
                sx: {
                    ml: 1,
                    borderRadius: '7.20942px',
                    p: '5px 0px',
                    width: '127px',
                    boxShadow: '0px 3.20419px 5.20419px rgba(0, 0, 0, 0.25)',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                    },
                },
            }}
            transformOrigin={{
                horizontal: 'right',
                vertical: 'top',
            }}
            anchorOrigin={{
                horizontal: 'right',
                vertical: 'bottom',
            }}
        >
            <MenuItemStyled>My Profile</MenuItemStyled>
            <MenuItemStyled>Setting</MenuItemStyled>
            <MenuItemStyled>Feedback</MenuItemStyled>
            <Divider />
            <MenuItemStyled>Logout</MenuItemStyled>
        </Menu>
    );
};

export default AccountMenu;
