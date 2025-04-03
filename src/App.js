import React, { useEffect } from "react";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { Outlet } from "react-router-dom";
import UserContext from "./utils/UserContex";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
// import { Provider } from "react-redux";
// import appStore from "./utils/appStore";

const App = () => {
  const [name, setName] = useState("Default User");
  useEffect(() => {
    const data = {
      name: "Sai Neelesh",
    };
    setName(data.name);
  }, []);
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: name, setName }}>
        <div className="App">
          <Header />
          <Outlet />
          <Footer />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

export default App;
