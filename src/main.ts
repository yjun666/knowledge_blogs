import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { clearLog } from './../src/app/utils/main-init-fun';


if (environment.production) {
  enableProdMode();
}

clearLog();

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
