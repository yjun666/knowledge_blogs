// 维护用户名和token
import Cookies from 'js-cookie';

const TokenKey = 'ssc_user_token';
const UserName = 'nickName';
const UserItCode = 'itcode';
const Password = 'password';

export const getToken = () => Cookies.get(TokenKey);

// 判断是否登陆
export const isLogin = () => {
  return !!(Cookies.get(TokenKey) && Cookies.get(UserName));
};

export const setToken = (token: string) => {
  Cookies.set(TokenKey, token, { expires: 0.1 });
};


export const getUserName = () => Cookies.get(UserName);

export const setUserName = (name) => {
  Cookies.set(UserName, name);
};

export const getPassword = () => Cookies.get(Password);

export const setPassword = (password) => {
  Cookies.set(Password, password);
};


export const removeToken = () => {
  Cookies.remove(TokenKey);
  Cookies.remove(UserName);
  Cookies.remove(UserItCode);
};



