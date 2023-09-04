import "./App.css";
import Home from "./pages/home";
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route
      path="/react-portfolio"
      element={<Home/>}
      />
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App;
