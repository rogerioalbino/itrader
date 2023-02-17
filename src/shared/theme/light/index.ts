import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const LightTheme = createTheme({
  palette: {
    primary: {
      main: 'rgb(32, 35, 42)',
    },
    secondary: {
      main: '#198',
    },
    error: {
      main: red.A400,
    },
  },
});

export default LightTheme;
