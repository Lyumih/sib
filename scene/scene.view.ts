namespace $.$$ {
	export type $sib_scene_Scene_Type = {
		question: string
		step: string
	}

	type Scene = $sib_scene_Scene_Type

	export class $sib_scene extends $.$sib_scene {
		
		island() {
			console.log('sib scene', this.island_id())
			return $sib_island.islands()?.find( island => island.id === this.island_id() )
		}

		scenes() {
			return this.island()?.scenes || []
		}

		@$mol_mem
		current_scene() {
			return this.scenes()?.find( scene => scene.step === this.step() )
		}

		island_name(): string {
			return "🌌" + this.island()?.name || 'no name'
		}

		@$mol_mem
		question(): string {
			console.log( this.current_scene(), this.scenes(), this.island_id(), this.island(), $sib_island.islands() )
			return this.current_scene()?.question || 'Задайте вопрос'
		}
		
	}
}
