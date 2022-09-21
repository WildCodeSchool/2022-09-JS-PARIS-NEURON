/* eslint-disable react/jsx-no-constructed-context-values */
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AvatarContext } from "@contexts";
import { Home, Topics, CreateTopics, UserProfile, CreateMail } from "@pages";

import "./App.scss";

const App = () => {
  const [avatarStatus, setAvatarStatus] = useState(false);
  return (
    <div className="App">
      <AvatarContext.Provider value={{ avatarStatus, setAvatarStatus }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/topics" element={<Topics />} />
            <Route path="/createtopics" element={<CreateTopics />} />
            <Route path="/userprofile" element={<UserProfile />} />
            <Route path="/createmail" element={<CreateMail />} />
          </Routes>
        </BrowserRouter>
      </AvatarContext.Provider>
    </div>
  );
};

export default App;
