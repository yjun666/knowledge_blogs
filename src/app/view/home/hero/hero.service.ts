
import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Heros, MockHeroData } from './herosType';
import { LoggerService } from '../../../shared/services/logger.service';

@Injectable()
export class HeroService {
    heros: Array<Heros>;
    constructor(
        private loggerService: LoggerService,
        private http: HttpClient,
        @Inject('apiUrl') private apiUrl) { }

    getHeros(): Observable<any> {
        return this.http.get(this.apiUrl);
    }
}
