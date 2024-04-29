import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import PostsContextProvider from "./contexts/globalState/PostsContextProvider.jsx";
import ModalContextProvider from "./contexts/globalState/ModalContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ModalContextProvider>
    <PostsContextProvider>
      <App />
    </PostsContextProvider>
  </ModalContextProvider>
);
