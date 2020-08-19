import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MUILink from "@material-ui/core/Link";
import NightsStayIcon from "@material-ui/icons/NightsStay";
import FlareIcon from "@material-ui/icons/Flare";
import useStyles from "./useStyles";

import { toggleDarkMode } from "../../redux/actions/darkModeAction";

function Header({ isDark, toggleDarkMode }) {
  const classes = useStyles();

  const linkStyle = isDark
    ? { textDecoration: "none", color: "white" }
    : { textDecoration: "none", color: "black" };

  return (
    <div className={classes.grow}>
      <AppBar position="fixed" color="default">
        <Toolbar>
          <Link style={linkStyle} to="/">
            <Typography className={classes.title} variant="h6" noWrap>
              {"REACT PLAYGROUND"}
            </Typography>
          </Link>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <MUILink
              style={linkStyle}
              onClick={() => toggleDarkMode(!isDark)}
              className={classes.signupin}
            >
              {isDark ? <FlareIcon /> : <NightsStayIcon />}
            </MUILink>

            <Link style={linkStyle} to="/">
              <Typography className={classes.signupin}>HOME</Typography>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const mapStateToProps = (state) => ({ isDark: state.darkMode });

const mapDispatchToProps = { toggleDarkMode };

export default connect(mapStateToProps, mapDispatchToProps)(Header);
