import React, { useEffect, useRef, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import {
  Grid,
} from "@mui/material";

import { Box } from "@mui/system";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { darkTheme, Item } from "./styled";


function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Item>Control</Item>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default App;
