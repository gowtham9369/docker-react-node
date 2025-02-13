// theme.ts or theme.js

import { createTheme } from "@mui/material/styles";

// Create a theme with Poppins as the font
const theme = createTheme({
  typography: {
    fontFamily: '"Poppins", sans-serif',  // Set Poppins as the font for the app
  },
});

export default theme;
