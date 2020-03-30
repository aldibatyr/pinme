import React from "react";
import Root from "./screens/Root";
import { ContextProvider } from "./context/context";


const App = () => {
  return (
    <ContextProvider>
      <Root />
    </ContextProvider>
  );
};

export default App;
