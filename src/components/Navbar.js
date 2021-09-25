import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useHistory } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { signOut, userObserver } from "../auth/functions";
import { useContext } from 'react';



export default function Navbar() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const history = useHistory();
  const { currentUser } = useContext(AuthContext);

  const logo = require("../assets/philip.png");

  return (
    <Box sx={{ flexGrow: 0, bgcolor:'primary.main', mb:15 }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, flexGrow:0}}
            onClick={() => history.push("/")} to="/"            
          >
            <img src = {logo}/>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, ml: 73 }}>
            PHİLİP
          </Typography>
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              {currentUser ? (
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem
                  onClick={() => {history.push("/profile"); handleClose()}}
                >
                  Profile
                </MenuItem>
                <MenuItem
                onClick={() => {history.push("/nev-blog"); handleClose()}}
                
                >
                  New Blog
                </MenuItem>
                <MenuItem
                  // onClick={
                  //   handleClose, signOut, () => history.push("/")
                  // }
                  onClick={() => {handleClose(); signOut(); history.push("/") }}
                >
                  Logout
                </MenuItem>
              </Menu>
            ) : (
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={() => {history.push("/login"); handleClose()}}>
                  Login
                </MenuItem>
                <MenuItem
                  onClick={() => {history.push("/register"); handleClose()}}
                >
                  Register
                </MenuItem>
              </Menu>
            )}
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
