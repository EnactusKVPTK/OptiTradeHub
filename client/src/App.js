import AppRouter from "./components/AppRouter";
const { BrowserRouter } = require("react-router-dom");

function App() {
  return (
    <BrowserRouter>
      <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
