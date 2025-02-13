import { AppBar, Toolbar, Box } from "@mui/material";
import reactLogo from '../assets/Logo.svg'

const Header = () => {
  return (
    <AppBar position="static" sx={{ marginBottom: 1,backgroundColor: 'white',boxShadow: 0}}>
      <Toolbar>
        <Box
          component="img"
          src={reactLogo}
          alt="Logo"
          sx={{ height: 40, marginRight: 3 }}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Header;