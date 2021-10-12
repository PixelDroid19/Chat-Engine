/*Auth Context tiene el proposito de de manejar los datos de la auteticación
  Enviando los datos ya verificados al componente Chat*/
import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "@firebase/auth";

const AuthContext = React.createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const auth = getAuth();
    console.log("auth",auth)
    onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);

      if (user) history.push("/chats");

      console.log(user);
    });
  }, [user, history]);

  const value = { user };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
