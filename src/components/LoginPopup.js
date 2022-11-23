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
        "& .MuiDialog-paper": {
          width: "500px",
          minHeight: "700px",
          borderRadius: "5px",
          p: "55px 51px 16px 51px",
        },
      }}
    >
      <DialogTitle
        sx={{
          textAlign: "center",
          pb: "50px",
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
        sx={{ mt: "35px" }}
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
        sx={primaryButton}
        onClick={() => {
          login();
          handleClose();
        }}
      >
        Let’s Go
      </Button>
      <Button
        variant="outlined"
        disableFocusRipple
        sx={secondaryButton}
        startIcon={<LinkedInIcon size="large" />}
      >
        Continue with Linkedin
      </Button>
      <Button
        variant="outlined"
        disableElevation
        sx={secondaryButton}
        startIcon={<GoogleIcon />}
      >
        Continue with Google
      </Button>
      <Typography mt="70px" fontSize="14px" fontWeight="400">
        Don’t have an account?
        <Typography
          component="span"
          color="primary"
          sx={{
            cursor: "pointer",
            "&: hover": { textDecoration: "underLine" },
          }}
          onClick={() => {
            handleClose();
            handleClickOpenSignupPopup();
          }}
        >
          Sign up
        </Typography>
      </Typography>
    </Dialog>
  );
};

export default LoginPopup;
