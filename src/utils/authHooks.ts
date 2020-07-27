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
  const Provider = AuthContext.Provider;
  return <Provider value={auth}>{children}</Provider>;
}

export const useAuth = () => {
  return useContext(AuthContext);
};

function useProvideAuth() {
  const [user, setUser] = useState(null);

  const login = (usename: string, password: string) => {
    return loginApi(usename, password).then((response) => {
      setUser(response.data.data.accessToken);
      localStorage.setItem('token', response.data.data.accessToken);
      return response.data.data.accessToken;
    });
  };

  useEffect(() => {
    // TODO 业务逻辑
  }, []);

  return {
    user,
    login,
  };
}
