import { useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Landing from "./components/Landing";

function App() {
  return (
    <>
      <Navigation />
      <main>
        <Landing />
      </main>
    </>
  );
}

export default App;
