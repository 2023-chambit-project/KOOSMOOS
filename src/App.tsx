import { GlobalStyles, theme } from "./styles";

import AppRouter from "./Routers/routing.tsx";
import { ThemeProvider } from "styled-components";

function App() {
  return(
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppRouter />
      </ThemeProvider>
  );
}

export default App
