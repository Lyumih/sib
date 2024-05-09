namespace $ {
	// type Skill = Item & { level: number, modes: Mode[] }
	export class $sib_api extends $mol_fetch {
		json( input: RequestInfo, init?: RequestInit ) {
			return this.json_response( input, init )
		}

		json_response( input: RequestInfo, init?: RequestInit ) {
			const [url, params] = input.toString().split( '?' )
			const body = JSON.parse( String( init?.body || {} ) )
			console.log( 'MOCK REQUEST:', url, body, params )
			switch( url ) {
				case '/auth': return this.auth( params, body )
				case '/hero': return this.hero( params, body )
				default: throw new Error( 'Mock not found: URL: ' + JSON.stringify( { url, params, body }, null, 2 ) )
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

	}
}
