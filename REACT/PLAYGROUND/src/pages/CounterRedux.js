import React, { useState } from "react";
import { connect } from "react-redux";
import {
  incrementCounter,
  incrementCounterBy,
  decrementCounter,
  decrementCounterBy,
  resetCounter,
} from "../redux/actions/countAction";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const CounterRedux = ({
  count,
  incrementCounter,
  incrementCounterBy,
  decrementCounter,
  decrementCounterBy,
  resetCounter,
}) => {
  const [countIncrease, setCountIncrease] = useState(0);
  const [countDecrease, setCountDecrease] = useState(0);

  return (
    <>
      <Paper style={{ width: "90%", margin: "7vh auto" }}>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          spacing={4}
        >
          <Grid item style={{ width: "100%" }}>
            <Typography variant="h4" align="center">
              REDUX COUNTER
            </Typography>
          </Grid>
          <Grid item>
            <Typography align="center" variant="h4">
              {count}
            </Typography>
          </Grid>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            style={{ width: "25%" }}
          >
            <Grid item xs={4}>
              <Typography align="center">
                <Button
                  color="primary"
                  variant="contained"
                  onClick={incrementCounter}
                >
                  UP
                </Button>
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography align="center" onClick={decrementCounter}>
                <Button color="primary" variant="contained">
                  DOWN
                </Button>
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography align="center">
                <Button
                  color="primary"
                  variant="contained"
                  onClick={resetCounter}
                >
                  RESET
                </Button>
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                return incrementCounterBy(countIncrease);
              }}
            >
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing="4"
              >
                <Grid item>
                  <TextField
                    id="outlined-number"
                    label="Increase Count By"
                    type="number"
                    variant="outlined"
                    value={countIncrease}
                    onChange={(e) => setCountIncrease(e.target.value)}
                  />
                </Grid>

                <Grid item>
                  <Button
                    color="primary"
                    variant="contained"
                    type="submit"
                    style={{ margin: "auto" }}
                  >
                    INCREASE BY
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>

          <Grid item>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                return decrementCounterBy(countDecrease);
              }}
            >
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing="3"
              >
                <Grid item>
                  <TextField
                    id="outlined-number"
                    label="Decrease By Count By"
                    type="number"
                    variant="outlined"
                    value={countDecrease}
                    onChange={(e) => setCountDecrease(e.target.value)}
                  />
                </Grid>
                <Grid item>
                  <Button
                    color="primary"
                    variant="contained"
                    type="submit"
                    style={{ margin: "auto" }}
                  >
                    DECREASE BY
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>

          <Grid item style={{ width: "100%" }}></Grid>
        </Grid>
      </Paper>
    </>
  );
};

const mapStateToProps = (state) => ({ count: state.count });

const mapDispatchToProps = {
  incrementCounter,
  incrementCounterBy,
  decrementCounter,
  decrementCounterBy,
  resetCounter,
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterRedux);
