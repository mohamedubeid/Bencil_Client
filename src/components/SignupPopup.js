import React, { useState } from "react";
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
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
// import { AdapterDayFns } from "@mui/x-date-pickers/AdapterDayFns";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";

const LoginPopup = ({ open, handleClose }) => {
  const [age, setAge] = useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [date, setDate] = useState("");

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      sx={{
        "& .MuiDialog-paper": {
          width: "500px",
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
        Sign up to Bencil
      </DialogTitle>
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <InputFieldStyle flex={0.49}>
          <InputBase
            sx={StyledInputBase}
            placeholder="First Name"
            inputProps={{ "aria-label": "search" }}
          />
        </InputFieldStyle>
        <InputFieldStyle flex={0.49}>
          <InputBase
            sx={StyledInputBase}
            placeholder="Last Name"
            inputProps={{ "aria-label": "search" }}
          />
        </InputFieldStyle>
      </Box>

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
      <FormControl fullWidth sx={{ mt: "20px" }}>
        {!age && (
          <InputLabel
            shrink={false}
            id="demo-simple-select-label"
            sx={{ mt: "4px" }}
          >
            Profession
          </InputLabel>
        )}
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          // label="Profession"
          onChange={handleChange}
        >
          <MenuItem value={10}>Developer/Programmer</MenuItem>
          <MenuItem value={20}>Marketer</MenuItem>
          <MenuItem value={30}>Designer</MenuItem>Accountant
          <MenuItem value={30}>Investor</MenuItem>
          <MenuItem value={30}>Accountant</MenuItem>
        </Select>
      </FormControl>
      {/* <LocalizationProvider dateAdapter={AdapterDayFns}>
        <DatePicker
          disableFuture
          label="Responsive"
          openTo="year"
          views={["year", "month", "day"]}
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider> */}
      {/* <FormControl> */}
      {/* <InputLabel id="date-label" shrink={true}>
          Birthday
        </InputLabel> */}
      <TextField
        // labelId="date-label"
        id="date"
        fullWidth
        // label="Birthday"
        type="date"
        sx={{
          mt: "20px",
        }}
        // variant="outlined"
        value={date}
        onChange={(event) => {
          setDate(event.target.value);
          console.log(event.target.value);
        }}
      />
      {/* </FormControl> */}

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
          Get useful tips and updates via email
        </Typography>
      </Box>
      <Button variant="contained" sx={primaryButton}>
        Join Now
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
      <Typography mt="70px" fontSize="14px" fontWeight="400" textAlign="center">
        Have an account?
        <Typography component="span" color="primary">
          log in
        </Typography>
      </Typography>
    </Dialog>
  );
};

export default LoginPopup;
