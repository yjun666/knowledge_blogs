import { environment } from './../../environments/environment';

class PathUrl{
  proxy = '/proxy';
  secondProxy = '/secondProxy';
  thirdProxy = '/thirdProxy'; // 设置了三个代理，以避免一个项目中出现多个地址
  localUrl = 'http://10.110.137.33:8015';
  prodUrl='';
  constructor(){
    if( !environment.production ){
      this.proxy = '/proxy';
      this.secondProxy = '/secondProxy';
      this.thirdProxy = '/thirdProxy';
      // this.localUrl = 'http://10.110.147.33:8015';
      this.localUrl = '';
    }else{
      this.prodUrl = '';
    }
  }
}
export const pathUrl = new PathUrl();
