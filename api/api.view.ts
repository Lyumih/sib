namespace $.$$ {
	export class $sib_api extends $.$sib_api {

		url() {
			return $mol_state_arg.value( 'url' )
		}

		json_response() {
			// Возвращает нужный json по заданному адресу, если совпало
			if( this.url() === 'api/auth/user?name=capitan' ) {
				return {
					login: 'capitan',
					name: 'Капитан',
				}
			} else {
				throw new Error( 'Not found' )
			}
			
		}
		
	}
}
