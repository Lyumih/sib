namespace $.$$ {
	type HeroProps = { login: string }
	type Item = {
		name: string,
		description?: string,
		level: number,
	}
	
	type Stats = {
		islands?: number,
	}
	export type $sib_hero_Hero_Type = {
		name: string,
		items: Item[],
		skills: Item[],
		stats: Stats,
	}

	type Hero = $sib_hero_Hero_Type
	export class $sib_hero extends $.$sib_hero {

		@$mol_mem
		static hero( next?: HeroProps | null ) {
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

		@$mol_mem
		hero_name(): string {
			return this.hero()?.name || 'no name'
		}

		@$mol_mem
		item_list(): readonly any[] {
			return this.hero()?.items.map( ( item ) => this.Item( item.name ) ) || []
		}

		get_item( name: string ) {
			return this.hero()?.items.find( item => item.name === name )
		}

		@$mol_mem
		item_title( id: any ): string {
			return this.get_item( id )?.name + ' Ур. ' + this.get_item( id )?.level
		}

		item_description( id: any ): string {
			return this.get_item( id )?.description || 'no description'
		}

		@$mol_mem
		skill_list(): readonly any[] {
			return this.hero()?.skills.map( ( skill ) => this.Skill( skill.name ) ) || []
		}

		get_skill( name: string ) {
			return this.hero()?.skills.find( skill => skill.name === name )
		}

		@$mol_mem
		skill_title( id: any ): string {
			return this.get_skill( id )?.name + ' Ур. ' + this.get_skill( id )?.level
		}

		skill_description( id: any ): string {
			return this.get_skill( id )?.description || 'no description'
		}

		stats(): string {
			return `Открыто островов: ${ this.hero()?.stats?.islands || 0 }`
		}
	}
}
