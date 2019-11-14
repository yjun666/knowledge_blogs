import { Heros, MockHeroData } from './herosType';
import { Observable, of } from 'rxjs';

export class MockHeroService {
    heros: Array<Heros> = MockHeroData;

    constructor() { }

    getHeros(): Observable<any> {
        return of({ data: this.heros });
    }
}
