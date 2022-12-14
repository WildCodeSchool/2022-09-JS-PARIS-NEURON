/* eslint-disable react/jsx-no-constructed-context-values */
import { useState } from "react";
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
  NotFound,
} from "@pages";

import "./App.scss";

const App = () => {
  const [message, setMessage] = useState("");

  return (
    <div className="App">
      <messageContext.Provider value={{ message, setMessage }}>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<NotFound />} />
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
