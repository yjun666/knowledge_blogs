import { environment } from './../../environments/environment';

class PathUrl{
  proxy = '/proxy';
  proxy1 = '/proxy1'
  proxy2 = '/proxy2'
  localUrl = 'http://10.110.137.33:8015';
  prodUrl='';
  constructor(){
    if( !environment.production ){
      this.proxy = '/proxy';
      this.proxy1 = '/proxy1';
      this.proxy2 = '/proxy2';
      // this.localUrl = 'http://10.110.147.33:8015';
      this.localUrl = '';
    }else{
      this.prodUrl = '';
    }
  }
}
export const pathUrl = new PathUrl();
