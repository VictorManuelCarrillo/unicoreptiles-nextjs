// next components
import { useRouter } from "next/router";

// mui components
import { Button } from "@mui/material";

//* newTab: boolean
//* text: string
//* href: string
//* startIcon: object
//* endIcon: object
//* color: string

const PrimaryBtn = (props) => {
  // useRouter function
  const router = useRouter();

  if (props.typeBtn == 'newTab') {
    return (
      <Button
        onClick={() => window.open(props.href)}
        variant='contained'
        startIcon={props.startIcon}
        endIcon={props.endIcon}
        sx={{
          px: 4,
          mx: 1 / 2,
          my: 1,
          color: "#1f1f1f",
          bgcolor: props.color + ".main",
          borderRadius: 5,
          fontWeight: "bold",
          "&: hover": { bgcolor: props.color + ".dark" },
        }}>
        {props.text}
      </Button>
    );
  }

  if (props.typeBtn == 'sameTab') {
    return (
      <Button
        onClick={() => router.push(props.href)}
        variant='contained'
        startIcon={props.startIcon}
        endIcon={props.endIcon}
        sx={{
          px: 4,
          mx: 1 / 2,
          my: 1,
          color: "#1f1f1f",
          bgcolor: props.color + ".main",
          borderRadius: 5,
          fontWeight: "bold",
          "&: hover": { bgcolor: props.color + ".dark" },
        }}
      >
        {props.text}
      </Button>
    );
  }

  if(props.typeBtn == 'formBtn') {
    return (
      <Button
        onClick={props.onClick}
        variant='contained'
        startIcon={props.startIcon}
        endIcon={props.endIcon}
        sx={{
          px: 4,
          mx: 1 / 2,
          my: 1,
          color: "#1f1f1f",
          bgcolor: props.color + ".main",
          borderRadius: 5,
          fontWeight: "bold",
          "&: hover": { bgcolor: props.color + ".dark" },
        }}
      >
        {props.text}
      </Button>
    );
  }
};

export default PrimaryBtn;