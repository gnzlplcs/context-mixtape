import React from "react";

export const MixtapeContext = React.createContext();

export const MixtapeProvider = ({ children, songs }) => {
  return (
    <MixtapeContext.Provider value={{ songs }}>
      {children}
    </MixtapeContext.Provider>
  );
};
