import React from "react";
import MuiCheckbox from "@material-ui/core/Checkbox";
import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    "&$checked": {
      color: green[600],
    },
  },
})((props) => (
  <FormControlLabel
    control={<MuiCheckbox color="default" {...props} checked={props.value} />}
    label="I Accept the Terms and Conditions"
  />
));

export default GreenCheckbox;
