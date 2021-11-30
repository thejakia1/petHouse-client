import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import Button from '@mui/material/Button';
import useAuth from '../../../hooks/useAuth';
import { NavLink } from "react-router-dom";
import Drawer from "../Drawer/Drawer";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    //marginLeft: theme.spacing(20),
    textAlign: "start",
    display: "flex",
    marginBottom: "14px",
  },
  logo: {
    flexGrow: "1",
    textAlign: "start",
    fontWeight: "bold",
    cursor: "pointer",
    marginBottom: "14px",
    color: "#0d0d0d",

  },
  link: {
    textDecoration: "none",
    color: "#0d0d0d",
    fontSize: "18px",
    fontWeight: "bold",
    margin: "8px",
    "&:hover": {
      color: "#ef9273",
      borderBottom: "2px solid #ef9273",
    },
  },
}));

function Navigation() {
  const { user, logout } = useAuth();
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar style={{ backgroundColor: '#fef9f8', paddingTop: "8px" }} position="sticky" >
      <CssBaseline />
      <Toolbar >
        <Typography variant="h4" className={classes.logo}>
          PetHouse
        </Typography>
        {isMobile ? (
          <Drawer />
        ) : (
          <div className={classes.navlinks}>
            <NavLink style={{ textDecoration: 'none', marginRight: '5' }} className={classes.link} to="/home">
              Home
            </NavLink>
            <NavLink style={{ textDecoration: 'none' }} className={classes.link} to="/explore">
              ExplorePets
            </NavLink>
            {user?.displayName && <Typography className={classes.link}>{user.displayName}</Typography>}
            {
              user?.email ?
                <>
                  <NavLink style={{ textDecoration: 'none' }} className={classes.link} to="/dashboardPage">
                    Dashboard
                  </NavLink>
                  <Button onClick={logout} style={{ fontWeight: "bold", backgroundColor: "#303179", fontSize: "16px" }}
                    sx={{ color: "#fef9f8" }} className={classes.link} >Logout</Button>
                </>
                :
                <NavLink style={{ textDecoration: 'none' }} className={classes.link} to="/login">
                  Login
                </NavLink>
            }
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}
export default Navigation;