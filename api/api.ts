namespace $ {

	type Island = $.$$.$sib_island_Island_Type
	export class $sib_api extends $mol_fetch {
		json( input: RequestInfo, init?: RequestInit ) {
			return this.json_response( input, init )
		}

		json_response( input: RequestInfo, init?: RequestInit ) {
			console.log( input, init )
			const [ url, params ] = input.toString().split( '?' )
			const body = init?.body && JSON.parse( String( init.body ) )
			console.log( 'MOCK REQUEST:', init?.method, url, body, params )
			switch( url ) {
				case '/auth': return this.auth( params, body )
				case '/hero': return this.hero( params, body )
				case '/quest': return this.quest( params, body )
				default: throw new Error( 'Mock not found: URL: ' + JSON.stringify( { url, method: init?.method, params, body }, null, 2 ) )
			}
		}

		auth( params: any, body: any ) {
			if( body.login === 'capitan' ) {
				return { login: 'capitan', name: 'Капитан моль' }
			}
			throw new Error( 'Пользователь не найден' )
		}

		hero( params: any, body: any ) {
			if( body.login === 'capitan' ) {
				return { name: 'Капитан моль', items: [], skills: [], stats: [] }
			}
			throw new Error( 'Герой не найден' )
		}

		quest( params: any, body: any ) {
			return [ {
				id: 'quest-1',
				name: 'Прибытие',
				description: 'Пройти первый квест, ознакомиться с минимум игры. Ознакомиться с предметом Лопата и умение Прыжок в неизвестность',
				status: 'active',
				scenes: [ {} ],
			}, {
				id: 'quest-2',
				name: 'Первый бой',
				description: 'Попробовать победить 1 противника лопатой, прокачать лопату.',
				status: 'open',
				scenes: []
			}, {
				id: 'quest-3',
				name: 'Свой квест',
				description: 'Создание первого своего квеста (можно заглушку)',
				status: 'closed',
				scenes: []
			}, {
				id: 'quest-4',
				name: 'Первый бой',
				description: 'Найти квест другого человека',
				status: 'denied',
				scenes: []
			}, {
				id: 'quest-5',
				name: 'Первый босс',
				description: 'Сложный квест, который можно пройти только с очень прокаченными навыками и предметами и удачей. С первых 2 попыток нельзя пройти.',
				status: 'denied',
				scenes: []
			} ] as Island[]
		}

	}
}
