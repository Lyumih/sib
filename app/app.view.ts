namespace $.$$ {
	export class $sib_app extends $.$sib_app {
		
		login() {
			return 'Login'
		}

		@$mol_mem
		static user( next?: any ) {
			console.log( 'user', next )
			return next ?? null;
			if( next ) {
				console.log( 'fetch user' )
				$mol_fetch.json( '/api/auth' )
			}
			console.log('after fetch')
			return next ?? null;
		}

		body(): readonly any[] {
			return [ $sib_app.user() ? this.Pages() : this.Auth() ]
		}
		
	}
}
