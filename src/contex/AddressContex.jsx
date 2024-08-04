// AddressContext.jsx
import React, { createContext, useState, useContext } from 'react';

const AddressContext = createContext();

export const AddressProvider = ({ children }) => {
  const [address, setAddress] = useState(null);

  return (
    <AddressContext.Provider value={{ address, setAddress }}>
      {children}
    </AddressContext.Provider>
  );
};

export const useAddress = () => useContext(AddressContext);
