import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

const clearLog = () => {
  // 禁用log
  if (!environment.isLog) {
    const consoleArr: string[] = [];
    const exclusive = ['warn', 'error']; // 除了这几个剩下的全部重写
    for (const key of Object.keys(console)) {
      if (exclusive.every((x: string) => x !== key)) {
        consoleArr.push(key);
      }
    }
    consoleArr.map((value) => window.console[value] = () => { }); // 重写函数
  }
};

if (environment.production) {
  enableProdMode();
}

clearLog();

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
