/* eslint-disable react/jsx-no-constructed-context-values */
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AvatarContext } from "@contexts";
import Home from "@pages/Home/Home";
import { Topics } from "@pages/Topics/Topics";
import { CreateTopics } from "@pages/CreateTopics/CreateTopics";
import { UserProfile } from "@pages/UserProfile/UserProfile";
import "./App.scss";
import { CreateMail } from "@pages/CreateMail/CreateMail";

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
