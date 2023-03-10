import React, { createContext, useContext, ReactNode } from "react";

interface AuthProviderProps {
    children: ReactNode;

}

const AuthContext = createContext([])

function AuthProvider({children}: AuthProviderProps) {
  return (
    <AuthContext.Provider value={["Senac"]}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
    const context = useContext(AuthContext);
    return context;
}

export { AuthProvider, useAuth };
