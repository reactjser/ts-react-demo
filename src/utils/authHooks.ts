import React, { useState, useEffect, useContext, createContext } from 'react';
import { loginApi } from '../api/common';

interface CounterContext {
  user: string | null;
}

const AuthContext: React.Context<CounterContext> = createContext<
  CounterContext
>({ user: null });

export function ProvideAuth({ children }: any) {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  return useContext(AuthContext);
};

function useProvideAuth() {
  const [user, setUser] = useState(null);

  // Wrap any Firebase methods we want to use making sure ...
  // ... to save the user to state.
  const login = (usename: string, password: string) => {
    return loginApi(usename, password).then((response) => {
      setUser(response.data.data.accessToken);
      localStorage.setItem('token', response.data.data.accessToken);
      return response.data.data.accessToken;
    });
  };

  // Subscribe to user on mount
  // Because this sets state in the callback it will cause any ...
  // ... component that utilizes this hook to re-render with the ...
  // ... latest auth object.
  useEffect(() => {
    // const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
    //   if (user) {
    //     setUser(user);
    //   } else {
    //     setUser(false);
    //   }
    // });
    // Cleanup subscription on unmount
    // return () => unsubscribe();
  }, []);

  // Return the user object and auth methods
  return {
    user,
    login,
  };
}
