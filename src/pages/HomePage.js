import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";

import Main from "../components/HomePageComponents/Main";
import { Stack, Divider, Box } from "@mui/material";
const HomePage = () => {
  return (
    <Stack direction="row" spacing="0px">
      <Box
        flex="auto"
        justifySelf="start"
        sx={{
          backgroundColor: "white",
          display: { xs: "none", md: "block" },
        }}
      ></Box>
      <Sidebar />
      <Divider
        orientation="vertical"
        flexItem
        sx={{ display: { xs: "none", md: "flex" } }}
      />
      <Main />
    </Stack>
  );
};

export default HomePage;
