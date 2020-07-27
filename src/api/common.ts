import axios from 'axios';

export const loginApi = (username: string, password: string) =>
  axios({
    method: 'POST',
    url: '/api/erp/user/login',
    data: {
      username,
      password,
    },
  });

/**
 *  获取当前用户权限数据
 */
export const getCurrentUser = () =>
  axios({
    url: '/user/currentUser',
    method: 'GET',
  });
