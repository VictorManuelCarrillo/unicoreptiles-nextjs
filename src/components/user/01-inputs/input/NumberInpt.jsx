// mui components
import { TextField, styled } from "@mui/material";

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

//* name: string
//* id: string// number
//* required: boolean
//* label: string
//* helperText: string
//* rows : number
//* onChange: function

const TextInpt = (props) => {
  return (
    <StyledTextField
      type="number"
      sx={{my: 1}}
      fullWidth
      name={props.name}
      id={props.id}
      required={props.required}
      label={props.label}
      helperText={props.helperText}
      FormHelperTextProps={{ sx:{color: '#777777'}}}
      onChange={props.onChange}
      />
  );
};

export default TextInpt;