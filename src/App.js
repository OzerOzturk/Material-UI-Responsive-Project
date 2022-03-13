import "./App.css";
import { Button } from "@material-ui/core";
import { PersonOutline } from "@material-ui/icons";

function App() {
  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        size="large"
        startIcon={<PersonOutline />}
      >
        Material UI
      </Button>
    </div>
  );
}

export default App;
