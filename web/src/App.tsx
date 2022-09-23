import { ThemeProvider } from "styled-components";
import Layout from "./components/Layout";
import Routes from "./routes";
import theme from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Routes />
      </Layout>
    </ThemeProvider>
  )
}

export default App
