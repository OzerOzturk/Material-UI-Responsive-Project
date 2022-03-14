import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({}));

function Navbar() {
  const classes = useStyles();
  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h6">Virtue</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
