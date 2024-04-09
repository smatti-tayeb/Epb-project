import React, { createContext, useState,useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user , setUser] =useState(null);
  useEffect(() => {
   const users= JSON.parse(localStorage.getItem('USER'));
   setUser(users);
  }, [])
  

 const  signIn = async (userData) => {
  
  console.log(userData);
 await setUser({id:userData.id,
email:userData.email,
username:userData.username
});
  };

  const signOut = async () => {
    await localStorage.removeItem('USER');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);