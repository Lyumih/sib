namespace $ {
	// type Skill = Item & { level: number, modes: Mode[] }
	export class $sib_fetch extends $mol_fetch {

		static is_mock() {
			return true
		}

		static mock() {
			return new $sib_api
		}

		static base_url() {
			return 'https://lyumih.github.io/sib/api'
		}
		static json( url: RequestInfo, init?: RequestInit ) {
			const input = this.is_mock() ? url : this.base_url() + url
			return this.is_mock() ? this.mock().json( input, init ) : super.json( input, init )
		}

		static post( input: RequestInfo, body?: unknown ) {
			return this.json( input, { body: JSON.stringify(body), method: 'POST' } )
		}
	}
}
