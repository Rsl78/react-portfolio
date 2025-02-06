
import { ThemeProvider } from "./provider";
import Page from "./components/Page";
// import Modal from "./components/Modal";



const App = () => {

  return (
    <ThemeProvider>
      <Page />
      {/* <Modal/> */}
    </ThemeProvider>
  );
};

export default App;
