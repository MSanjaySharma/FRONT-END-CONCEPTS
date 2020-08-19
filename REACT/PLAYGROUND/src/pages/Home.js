import React from "react";
import { NavLink } from "react-router-dom";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

function Home() {
  return (
    <>
      <Paper style={{ width: "90%", margin: "2vh auto" }}>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          spacing={4}
        >
          <Grid item style={{ width: "100%" }}>
            <Typography variant="h4" align="center">
              A PLAYGROUND APP
            </Typography>
          </Grid>
          <Grid item style={{ width: "100%" }}>
            <Typography variant="body1" align="center">
              <NavLink to="/counterRedux">REDUX COUNTER</NavLink>
            </Typography>
          </Grid>
          <Grid item style={{ width: "100%" }}>
            <Typography variant="body1" align="center">
              <NavLink to="/counterContext">REDUX COUNTER</NavLink>
            </Typography>
          </Grid>

          <Grid item style={{ width: "100%" }}></Grid>
        </Grid>
      </Paper>
    </>
  );
}

export default Home;
