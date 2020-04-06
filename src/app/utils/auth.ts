// 维护用户名和token
import { setCookie, getCookie, removeCookie } from './cookie';

const TokenKey = 'ssc_user_token';
const UserName = 'nickName';
const UserItCode = 'itcode';
const Password = 'password';
const CookieExpires = new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 1); // cookie 7天有效期，过期自动删除cookie

export const getToken = () => getCookie(TokenKey);

// 判断是否登陆
export const isLogin = () => {
  return !!(getCookie(TokenKey) && getCookie(UserName));
};

export const setToken = (token: string) => {
  setCookie(TokenKey, token, { expires: CookieExpires });
};


export const getUserName = () => getCookie(UserName);

export const setUserName = (name) => {
  setCookie(UserName, name);
};

export const getPassword = () => getCookie(Password);

export const setPassword = (password) => {
  setCookie(Password, password);
};


export const removeToken = () => {
  removeCookie(TokenKey);
  removeCookie(UserName);
  removeCookie(UserItCode);
};
