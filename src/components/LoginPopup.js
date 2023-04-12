import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Box from "@mui/material/Box";
import DialogTitle from "@mui/material/DialogTitle";
import Checkbox from "@mui/material/Checkbox";
import {
  Typography,
  TextField,
  FormControl,
  OutlinedInput,
  IconButton,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GoogleIcon from "@mui/icons-material/Google";
import {
  primaryButton,
  secondaryButton,
} from "../styledComponents/LogSignPopupStyledComp";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const LoginPopup = ({
  open,
  handleClose,
  handleClickOpenSignupPopup,
  login,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      sx={{
        "& .MuiDialog-paper": {
          width: "480px",
          borderRadius: "5px",
          p: "50px 51px 40px 51px",
          overflow: "auto",
          display: "block",
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
      <Box
        component="form"
        sx={{
          "& .MuiInputBase-root": {
            height: "50px",
            marginTop: "8px",
            input: {
              "&::placeholder": {
                fontSize: "15px",
                fontWeight: "400",
              },
            },
          },
        }}
      >
        <TextField
          placeholder="Email"
          type="email"
          fullWidth={true}
          variant="outlined"
        />
        <FormControl variant="outlined" fullWidth>
          <OutlinedInput
            type={showPassword ? "text" : "password"}
            endAdornment={
              <IconButton
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
                sx={{ opacity: "80%" }}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            }
            placeholder="Password"
          />
        </FormControl>
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
