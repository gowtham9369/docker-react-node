import { Suspense, lazy } from "react";
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme'; // Import the theme with Poppins applied
import './App.css';

const Home = lazy(() => import("./pages/Home"));
const Loading = lazy(() => import("./components/Loading"));

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Suspense fallback={<Loading />}>
          <Home />
        </Suspense>
      </ThemeProvider>
    </>
  )
}

export default App
