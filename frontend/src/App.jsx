import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserHeader } from "./components";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/test" element={<UserHeader />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
