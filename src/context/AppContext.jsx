import React, { useState } from "react";
import { createContext } from "react";

const AppContext = createContext(null);

function Context({ children }) {
  const [userData, setUserData] = useState({
    color: "",
    photo: "",
    uid: "",
    username: "",
  });

  const value = { userData, setUserData };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export { AppContext, Context };
