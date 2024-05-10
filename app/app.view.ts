namespace $.$$ {

	
	type UserProps = { login: string }
	type User = { login: string, name: string }

	export class $sib_app extends $.$sib_app {

		@$mol_mem
		static user( next?: UserProps | null ) : User | null  {
			if( next === undefined ) return $mol_state_local.value( 'user' )
			return $mol_state_local.value<User>( 'user', next === null ? null : $sib_fetch.post<User, UserProps>( '/auth', next ) )
		}


		logout( next?: any ) {
			$sib_app.user( null )
		}

		hero_name(): string {
			return $sib_app.user() ? `${$sib_app.user()?.name}@${$sib_app.user()?.login}` : '-'
		}

		user_tools(): readonly any[]  {
			return $sib_app.user() ? [ this.Hero_name(), this.Logout() ]: []
		}

		body(): readonly any[] {
			return [ $sib_app.user() ? this.Pages() : this.Auth() ]
		}

	}
}
