import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import 'nprogress/nprogress.css';
import { useAuth } from '../../utils/authHooks';

interface IRoute {
  title: string;
  path: string;
  exact?: boolean;
  needAuth: boolean;
  component: React.FC;
}

const ProgressRoute: React.FC<IRoute> = ({ needAuth, ...rest }) => {
  const auth: any = useAuth();

  // 如果路由需要权限且处于未登录态，则重定向到登录页
  if (needAuth && !auth.user) {
    return <Redirect to="/login" />;
  }

  return <Route {...rest}></Route>;
};

export default ProgressRoute;
