import { BrowserRouter } from "react-router-dom";
import Router from "./components/router";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
