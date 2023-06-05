import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import {
  Avatar,
  Badge,
  Box,
  IconButton,
  MenuItem,
  Tab,
  Tabs,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import aa from "./images/aa.png";
import Menu from "@mui/material/Menu";
import bitmap from "./images/bitmap.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MailIcon from "@mui/icons-material/Mail";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

const Pages = ["Home", "Mens", "Womens", "Accessories"];
const userMenu = ["Profile", "Dashboard", "Account", "Logout"];

export default function Navbar({ count }) {
  const [profileMenu, setProfileMenu] = useState(null);

  const handleOpenprofileMenu = (event) => {
    setProfileMenu(event.currentTarget);
  };
  const handleCloseprofileMenu = () => {
    setProfileMenu(null);
  };
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
 
  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#00796b",
          height: 70,
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
        }}
      >
        {!isMatch && (
          <Box>
            <Link to="/home">
              <img src={bitmap} alt="cc" height="100px" width="150px" />
            </Link>
          </Box>
        )}

        {/* ---Drawer--- */}

        {isMatch ? (
          <>
            <Box sx={{ mt: 3 }}>
              <Sidebar />
            </Box>
            <Box sx={{ justifyContent: "center", ml: 7 }}>
              <Link to="/home" style={{ textDecoration: "none" }}>
                <img src={bitmap} alt="cc" height="100px" width="150px" />
              </Link>
            </Box>
          </>
        ) : (
          <>
          {/* -----PAGES---- */}
            <Box sx={{ mt: 3 }}>
              {Pages.map((page, index) => (
                <Link
                  key={index}
                  to={`/${page}`}
                  style={{ color: "#ffff", textDecoration: "none" }}
                >
                  <Tab style={{ color: "#ffff" }} label={page} />
                </Link>
              ))}
            </Box>
          </>
        )}
          {/* ---------ICONS-------- */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            p: 1,
            mt: 2,
          }}
        >
          <IconButton color="inherit">
            <Badge color="warning" badgeContent={count}>
              <ShoppingCartIcon />
            </Badge>
          </IconButton>

          <IconButton color="inherit">
            <Badge badgeContent="0" color="warning" className="mailicon">
              <MailIcon />
            </Badge>
          </IconButton>
          <Tooltip>
            <IconButton onClick={handleOpenprofileMenu}>
              <Avatar
                src={aa}
                alt="aa"
                sx={{
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  border: "1px solid white",
                }}
              />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "40px" }}
            anchorEl={profileMenu}
            onClose={handleCloseprofileMenu}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            open={Boolean(profileMenu)}
          >
            {userMenu.map((Menu) => (
              <MenuItem key={Menu} onClick={handleCloseprofileMenu}>
                <Typography textAlign={"center"}>{Menu}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </AppBar>
    </>
  );
}
