
import HomePage from "./pages/HomePage";
import { ThemeProvider } from "./provider";




const App = () => {

  return (
    <ThemeProvider>
      <HomePage/>
    </ThemeProvider>
  );
};

export default App;
