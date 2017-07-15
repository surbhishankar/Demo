import { InMemoryDbService }   from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
	createDb() {
		const heroes = [
			{ id: 0, name: 'Zero' },
			{ id: 11, name: 'Spiderman' },
			{ id: 12, name: 'Batman' },
			{ id: 13, name: 'Wolverine' },
			{ id: 14, name: 'Ironman' },
			{ id: 15, name: 'Flash' },
			{ id: 16, name: 'Arrow' },
			{ id: 17, name: 'Antman' },
			{ id: 18, name: 'Avatar' },
			{ id: 19, name: 'Deadpool' },
			{ id: 20, name: 'Thor' }
		];
		return {heroes};
	}
}