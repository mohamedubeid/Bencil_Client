import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Box from "@mui/material/Box";
import DialogTitle from "@mui/material/DialogTitle";
import InputBase from "@mui/material/InputBase";
import Checkbox from "@mui/material/Checkbox";
import { Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GoogleIcon from "@mui/icons-material/Google";
import {
  primaryButton,
  secondaryButton,
  InputFieldStyle,
  StyledInputBase,
} from "../styledComponents/LogSignPopupStyledComp";
import { scrollbarStyles } from "../styledComponents/GlobalStyledComp";

const LoginPopup = ({
  open,
  handleClose,
  handleClickOpenSignupPopup,
  login,
}) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      sx={{
        overflow: "auto",
        "& .MuiDialog-paper": {
          width: "500px",
          borderRadius: "5px",
          p: "25px 51px 16px 51px",
          overflow: "auto",
          display: "block",
          ...scrollbarStyles,
        },
      }}
    >
      <DialogTitle
        sx={{
          textAlign: "center",
          fontWeight: "700",
          fontSize: "30px",
        }}
        color="primary"
      >
        Log in to Bencil
      </DialogTitle>
      <Box>
        <InputFieldStyle>
          <InputBase
            sx={StyledInputBase}
            fullWidth
            placeholder="Email"
            inputProps={{ "aria-label": "search" }}
          />
        </InputFieldStyle>
        <InputFieldStyle>
          <InputBase
            sx={StyledInputBase}
            fullWidth
            placeholder="Password"
            inputProps={{ "aria-label": "search" }}
          />
        </InputFieldStyle>
      </Box>
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        sx={{ mt: "20px" }}
      >
        <Checkbox defaultChecked sx={{ color: "rgba(0, 0, 0, 0.2)" }} />
        <Typography
          sx={{
            fontWeight: "400",
            fontSize: "16px",
            color: "rgba(0, 0, 0, 1)",
          }}
        >
          Remember me
        </Typography>
      </Box>
      <Button
        variant="contained"
        fullWidth
        sx={primaryButton}
        onClick={() => {
          login();
          handleClose();
        }}
      >
        Let’s Go
      </Button>
      <Button
        fullWidth
        variant="outlined"
        disableFocusRipple
        sx={secondaryButton}
        startIcon={<LinkedInIcon size="large" />}
      >
        Continue with Linkedin
      </Button>
      <Button
        fullWidth
        variant="outlined"
        disableElevation
        sx={secondaryButton}
        startIcon={<GoogleIcon />}
      >
        Continue with Google
      </Button>
      <Box sx={{ textAlign: "center" }}>
        <Typography
          mt="35px"
          fontSize="14px"
          fontWeight="400"
          display="inline-block"
        >
          Don’t have an account?
        </Typography>
        <Typography
          fontSize="14px"
          fontWeight="400"
          color="primary"
          sx={{
            cursor: "pointer",
            display: "inline-block",
            "&: hover": { textDecoration: "underLine" },
            ml: "3px",
          }}
          onClick={() => {
            handleClose();
            handleClickOpenSignupPopup();
          }}
        >
          Sign up
        </Typography>
      </Box>
    </Dialog>
  );
};

export default LoginPopup;
