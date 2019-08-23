import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HeroService {
    heros: Array<{ id: number; name: string }> = [
        { id: 16, name: '1' },
        { id: 17, name: '2' },
        { id: 18, name: '3' },
        { id: 19, name: '4' },
        { id: 20, name: '5' }
    ];

    constructor(
        private http: HttpClient
    ) { }
    getHeros() {
        return this.heros;
    }
}
