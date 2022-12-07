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
  NeuronProfile,
  MarkdownSyntax,
} from "@pages";

import "./App.scss";

const App = () => {
  const [message, setMessage] = useState("");

  const reload = () => {
    setTimeout(() => {
      window.location.reload(false);
    }, 1500);
  };

  useEffect(() => {
    const today = new Date();
    const endOfSession = parseInt(localStorage.getItem("endOfSession"), 10);

    if (endOfSession < today.getTime()) {
      localStorage.clear();
      setMessage("vous êtes déconnecté");
      reload();
    }
  }, []);

  return (
    <div className="App">
      <messageContext.Provider value={{ message, setMessage }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="userprofile" element={<UserProfile />} />
            <Route path="/topics" element={<Topics />} />
            <Route path="/topic/:id" element={<SingleTopic />} />
            <Route path="/createtopics" element={<CreateTopics />} />
            <Route path="/userprofile/:id" element={<UserProfile />} />
            <Route path="neuronprofile/:id" element={<NeuronProfile />} />
            <Route path="/markdownsyntax" element={<MarkdownSyntax />} />
          </Routes>
        </BrowserRouter>
      </messageContext.Provider>
    </div>
  );
};

export default App;
