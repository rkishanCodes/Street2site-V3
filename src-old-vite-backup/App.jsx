import React from "react";
import SmoothScrollProvider from "./SmoothScrollProvider";
import Router from "./Router";

const App = () => {
  return (
    <SmoothScrollProvider>
      <Router />
    </SmoothScrollProvider>
  );
};

export default App;
