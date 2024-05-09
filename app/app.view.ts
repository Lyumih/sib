namespace $.$$ {
	export class $sib_app extends $.$sib_app {

		@$mol_mem
		static user( next?: any ) {
			if( next === undefined ) return $mol_state_local.value( 'user' )
			return $mol_state_local.value( 'user', next === null ? null : $sib_fetch.post( '/auth', next ) )
		}

		body(): readonly any[] {
			return [ $sib_app.user() ? this.Pages() : this.Auth() ]
		}

	}
}
