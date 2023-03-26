// react components
import { useState } from "react";
// mui components
import { InputLabel, MenuItem, FormControl, Select, FormHelperText } from "@mui/material";

const SelectInput = (props) => {
  // select change value and state
  const [selectValue, setSelectValue] = useState("");
  const handleChange2 = (e) => {
    setSelectValue(e.target.value);
  };

  // arr menuItems
  const selectMenuItems = props.menuItems;

  return (
    <FormControl fullWidth>
      <InputLabel>{props.label}</InputLabel>
      <Select
      name={props.name}
        id={props.id}
        sx={{ color: "red" }}
        labelId='demo-simple-select-label'
        // value={selectValue}
        value={props.value}
        label='Age'
        onChange={ handleChange2 && props.onChange}
      >
        <MenuItem value={10}>Ten</MenuItem>
        {selectMenuItems.map((selectMenuItem, idx) => (
          <MenuItem key={idx} value={selectMenuItem.text}>
            {selectMenuItem.text}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText sx={{ color: "#777777" }}>{props.helperText}</FormHelperText>
    </FormControl>
  );
};

export default SelectInput;
