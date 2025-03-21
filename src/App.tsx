import { ThemeProvider } from "@emotion/react";
import "./index.css";
import RoutesApp from "./routes/mainRoutes";
import theme from "./theme";


function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RoutesApp />
      </ThemeProvider>
    </>
  );
}

export default App;
