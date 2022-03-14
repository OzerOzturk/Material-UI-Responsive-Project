import { createTheme } from "@material-ui/core";
import { blue, green } from "@material-ui/core/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: green[500],
    },
  },
  myButton: {
    backgroundColor: "red",
    color: "white",
    border: "1px solid black",
  },
});
