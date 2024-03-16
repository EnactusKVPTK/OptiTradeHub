import AppRouter from "./components/AppRouter";
import NavScroll from "./components/NavScroll";

const { BrowserRouter } = require("react-router-dom");

function App() {
  return (
    <BrowserRouter>
      <NavScroll/>
      <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
