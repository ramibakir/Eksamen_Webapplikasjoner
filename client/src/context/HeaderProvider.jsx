import React, { createContext, useContext, useState } from 'react';

const HeaderContext = createContext();
const SetHeaderContext = createContext();

const HeaderProvider = ({ children }) => {
  const [headerContent, setHeaderContent] = useState(null);

  return (
    <SetHeaderContext.Provider value={setHeaderContent}>
      <HeaderContext.Provider value={headerContent}>
        {children}
      </HeaderContext.Provider>
    </SetHeaderContext.Provider>
  );
};

export const useHeader = () => useContext(HeaderContext);
export const useSetHeader = () => useContext(SetHeaderContext);

export default HeaderProvider;
