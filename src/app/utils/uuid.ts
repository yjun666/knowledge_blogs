import { v1 as uuid1 } from 'uuid';
import { v3 as uuid3 } from 'uuid';
import { v4 as uuid4 } from 'uuid';
import { v5 as uuid5 } from 'uuid';
export const uuidv1 = () => {
  return 'a' + uuid1();
}
export const uuidv4 = () => {
  return 'a' + uuid4();
}
export const uuidv3 = (str) => {
  // return uuid3(str, uuid3.DNS);
  // return uuid3(str, uuid3.URL);
  // tslint:disable-next-line: max-line-length
  return 'a' + uuid3(str, '1b671a64-40d5-491e-99b0-da01ff1f3341'); // 不生成随机数，相同的str，会产生相同的uuid，后边的是命名空间参数，不同的参数会产生不同的id，uuid5相同，uuid5应用多，算法好，详见npm文档
}
export const uuidv5 = (str) => {
  // return uuid5(str, uuid5.DNS);
  // return uuid5(str, uuid5.URL);
  return 'a' + uuid5(str, '1b671a64-40d5-491e-99b0-da01ff1f3341');
}
