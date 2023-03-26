import { useState } from "react";
import { FormControl, FormControlLabel, Switch } from "@mui/material";

const PrimarySwitch = (props) => {
  const [checked, setChecked] = useState();

  const handleChange2 = (e) => {
    setChecked(e.target.checked);
  };

  return (
    <Switch
      checked={checked}
      onChange={handleChange2 && props.onChange}/>
  )
};

return PrimarySwitch;
