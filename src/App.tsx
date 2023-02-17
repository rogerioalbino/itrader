import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";

import LightTheme from "@theme/light";
import Layout from "@layout";

export default function App() {
  return (
    <ThemeProvider theme={LightTheme}>
      <CssBaseline />
      <Layout />
    </ThemeProvider>
  );
}
