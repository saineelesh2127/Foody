import React, { useEffect } from "react";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { Outlet } from "react-router-dom";
import UserContext from "./utils/UserContex";

const App = () => {
  const [name, setName] = useState("Default User");
  useEffect(() => {
    const data = {
      name: "Sai Neelesh",
    };
    setName(data.name);
  }, []);
  return (
    <UserContext.Provider value={{ loggedInUser: name, setName }}>
      <div className="App">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </UserContext.Provider>
  );
};

export default App;
