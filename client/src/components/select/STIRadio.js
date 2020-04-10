import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

import { makeStyles } from "@material-ui/core/styles";

import { useSelector, useDispatch } from "react-redux";
import { setSTIRadio } from "../../actions";

const useStyles = makeStyles(theme => ({
  radio: {
    fontSize: 13
    // In Chinese and Japanese the characters are usually larger,
    // so a smaller fontsize may be appropriate.
  }
}));

function STIRadio() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleChange = event => {
    let selectType = event.target.value;

    dispatch(setSTIRadio(selectType));
  };

  const selectType = {
    col: "Column",
    row: "Row"
  };
  return (
    <FormControl component="fieldset">
      <RadioGroup
        onChange={handleChange}
        row
        aria-label="position"
        name="position"
        defaultValue="col"
      >
        {Object.entries(selectType).map(([key, val]) => {
          return (
            <FormControlLabel
              value={key}
              control={<Radio color="primary" />}
              label={val}
              labelPlacement="end"
              classes={{
                label: classes.radio
              }}
            />
          );
        })}
      </RadioGroup>
    </FormControl>
  );
}

export default STIRadio;
