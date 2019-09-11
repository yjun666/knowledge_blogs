import { Injectable, Inject } from '@angular/core';
import { SelectivePreloadingStrategyService } from './selective-preloading-strategy.service';

@Injectable()
export class LoggerService {
    constructor(
        private enable: boolean,
        private selectivePreloadingStrategyService: SelectivePreloadingStrategyService
    ) { }
    log(fn) {
        if (this.enable) {
            console.log(this.selectivePreloadingStrategyService.preloadedModules);
            fn();
        }
    }

}
