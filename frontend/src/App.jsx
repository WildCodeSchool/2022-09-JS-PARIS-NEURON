/* eslint-disable react/jsx-no-constructed-context-values */
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AvatarContext } from "@contexts/";
import Home from "@pages/";
import "./App.scss";

const App = () => {
  const [avatarStatus, setAvatarStatus] = useState(false);
  return (
    <div className="App">
      <AvatarContext.Provider value={{ avatarStatus, setAvatarStatus }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </AvatarContext.Provider>
    </div>
  );
};

export default App;
