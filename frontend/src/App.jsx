/* eslint-disable react/jsx-no-constructed-context-values */
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { messageContext } from "@contexts";
import {
  Home,
  Topics,
  SingleTopic,
  CreateTopics,
  UserProfile,
  CreateMail,
} from "@pages";

import "./App.scss";

const App = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (message === "vous êtes déconnecté") {
      localStorage.removeItem("token");
    }
  }, []);

  return (
    <div className="App">
      <messageContext.Provider value={{ message, setMessage }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="userprofile" element={<UserProfile />} /> */}
            <Route path="/topics" element={<Topics />} />
            <Route path="/topic/:id" element={<SingleTopic />} />
            <Route path="/createtopics" element={<CreateTopics />} />
            <Route path="/userprofile" element={<UserProfile />} />
            <Route path="/createmail" element={<CreateMail />} />
          </Routes>
        </BrowserRouter>
      </messageContext.Provider>
    </div>
  );
};

export default App;
