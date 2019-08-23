export class MockHeroService {
    heros: Array<{ id: number; name: string }> = [
        { id: 16, name: 'RubberMan' },
        { id: 17, name: 'Dynama' },
        { id: 18, name: 'Dr IQ' },
        { id: 19, name: 'Magma' },
        { id: 20, name: 'Tornado' }
    ];

    constructor() { }

    getHeros() {
        return this.heros;
    }
}
