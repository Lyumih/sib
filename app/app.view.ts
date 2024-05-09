namespace $.$$ {
	export class $sib_app extends $.$sib_app {

		login() {
			return 'Login'
		}

		@$mol_mem
		static user( next?: any ) {
			console.log( 'user', next )
			if( next ) {
				return $sib_fetch.post( '/auth?123=56', next ) ?? null
			}
			console.log( 'after fetch' )
			return next ?? null
		}

		body(): readonly any[] {
			return [ $sib_app.user() ? this.Pages() : this.Auth() ]
		}

	}
}
