import Home from '../views/Home';
import Login from '../views/Login';

interface IRoute {
  title: string;
  path: string;
  exact?: boolean;
  needAuth: boolean;
  component: React.FC;
}

const routes: IRoute[] = [
  {
    title: 'Home',
    path: '/',
    exact: true,
    needAuth: true,
    component: Home,
  },
  {
    title: 'Login',
    path: '/login',
    needAuth: false,
    component: Login,
  },
];

export default routes;
