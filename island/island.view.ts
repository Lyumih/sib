namespace $.$$ {

	type IslandProps = {
		login: string
	}

	export type $sib_island_Island_Type = {
		id: string,
		name: string,
		description: string,
		status: 'open' | 'active' | 'closed' | 'denied',
		scenes: $sib_scene_Scene_Type[]
	}
	type Island = $sib_island_Island_Type

	export class $sib_island extends $.$sib_island {

		@$mol_mem
		static islands( next?: IslandProps | null ) {
			if( next === undefined && $mol_state_local.value<Island[]>( 'quest' ) ) return $mol_state_local.value<Island[]>( 'quest' )
			return $mol_state_local.value<Island[]>( 'quest', next === null ? null : $sib_fetch.get<Island[]>( '/quest' ) )
		}

		@$mol_mem
		islands( next?: any ) {
			return $sib_island.islands() || []
		}

		@$mol_mem
		island_list(): readonly any[] {
			return this.islands().map( island => this.Island( island.id ) )
		}

		@$mol_mem
		get_island( id?: string ) {
			return this.islands().find( island => island.id === id )
		}

		@$mol_mem
		island_count(): string {
			return `Острова: ${ this.islands()?.length || 0 }`
		}

		island_name( id: any ): string {
			return this.get_island( id )?.name || 'no name'
		}

		scene_count( id: any ): string {
			return "Сцен: " + this.get_island( id )?.scenes?.length || '0'
		}

		status( id: any ): string {
			return this.get_island( id )?.status || 'no status'
		}

		status_button( id: any ): string {
			switch( this.get_island( id )?.status ) {
				case 'open': return 'Начать'
				case 'active': return 'Продолжить'
				case 'closed': return 'Завершено'
				case 'denied': return 'Недоступно'
				default: return 'no status'
			}
		}

		start_enabled( id: any ): boolean {
			switch( this.get_island( id )?.status ) {
				case 'open': case 'active': return true
				default: return false
			}
		}

		start( id: string, next?: any ) {
			console.log( 'start', id, next )
			$mol_state_arg.value( 'island', id )
			$mol_state_arg.value( 'step', '0' )
		}

		current_island() {
			return $mol_state_arg.value( 'island' ) 
		}

		pages(): readonly any[] {
			return [ this.current_island() ? this.Scene() : this.Island_page()]
		}
	}
}
