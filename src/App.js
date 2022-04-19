import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './ConfigTheme'
import Navbar from './components/Navbar';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar/>
      <Button variant="contained" color="primary">
        1
      </Button>
      <Button variant="contained" color="secondary">
        2
      </Button>
      <Typography variant="h1" color="initial">
        Tempor Lorem consectetur minim ex anim consequat non occaecat ipsum ad anim dolore aliqua incididunt. Deserunt labore in mollit Lorem cillum laboris. Nulla cillum mollit sunt proident mollit veniam ex excepteur anim cupidatat. Consequat id occaecat velit in exercitation veniam consectetur proident non dolor. Aliqua adipisicing nulla amet consectetur nisi esse id dolor officia aliquip dolor proident minim. Laborum duis cillum esse dolor.
      </Typography>
    </ThemeProvider>
  );
}

export default App;
