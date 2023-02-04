// COMPONENT PROPS ____________________ //
//* id         = 'String'
//* label      = 'String'
//* required   = Boolean
//* disabled   = Boolean
//* type       = 'String' password/number
//* helperText = 'String

import { TextField } from "@mui/material";

import { styled } from "@mui/material/styles";

const StyledTextField = styled(TextField)({
  // label
  "& label": {
    color: "lightgrey",
  },
  // label focused
  "& label.Mui-focused": {
    color: "lightblue",
  },
  // ??
  "& .MuiInput-underline:after": {
    borderBottomColor: "red",
  },
  // input
  "& .MuiOutlinedInput-root": {
    color: "white",
    // border
    "& fieldset": {
      border: "2px solid lightgrey",
      borderRadius: "12px",
    },
    // border hover
    "&:hover fieldset": {
      borderColor: "white",
    },
    // focused border
    "&.Mui-focused fieldset": {
      borderColor: "lightblue",
    },
  },
});

const InputText = (props) => {
  return (
    <StyledTextField
      required={props.required}
      disabled={props.disabled}
      type={props.type}
      helperText={props.helperText}
      id={props.id}
      label={props.label}
      fullWidth
    />
  );
};

export default InputText;
