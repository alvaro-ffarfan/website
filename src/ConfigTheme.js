import { createTheme } from "@material-ui/core/styles";
//import purple from "@material-ui/core/colors/purple";
//import lightGreen  from "@material-ui/core/colors/lightGreen";
import blue from "@material-ui/core/colors/blue";
//! configuracion para los colores
const theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
    },
  },
});

export default theme;
