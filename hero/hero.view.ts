namespace $.$$ {
	type HeroProps = { login: string }
	type Hero = {
		name: string,
		items: [],
		skills: [],
		stats: [],
	}
	export class $sib_hero extends $.$sib_hero {

		
		@$mol_mem
		static hero( next?: HeroProps | null ) {
			console.log( 'hero next', next )
			const user = $sib_app.user()
			if( user ) {
				if( next === undefined && $mol_state_local.value<Hero>( 'hero' ) ) return $mol_state_local.value<Hero>( 'hero' )
				return $mol_state_local.value<Hero>( 'hero', next === null ? null : $sib_fetch.post<Hero, HeroProps>( '/hero', user ) )
			}
		}

		@$mol_mem
		hero(next?:any) {
			return $sib_hero.hero()
		}

		hero_name(): string {
			return this.hero()?.name || 'no name'
		}
		
	}
}
