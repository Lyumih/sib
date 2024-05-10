namespace $.$$ {
	export type $sib_scene_Scene_Type = {
		step: string
		bg?: string
		question: string
	}

	export class $sib_scene extends $.$sib_scene {
		
		@$mol_mem
		island() {
			return $sib_island.islands()?.find( island => island.id === this.island_id() )
		}

		scenes() {
			return this.island()?.scenes || []
		}

		step(): string {
			console.log($mol_state_arg.value('step'))
			return $mol_state_arg.value( 'step' ) || '0'
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
			return this.current_scene()?.question || '! Неизвестное место'
		}

		@$mol_mem
		bg_url() {
			// https://wallpaperscraft.ru/wallpaper/nebo_oblaka_otrazheniia_86205 - Сайт с картинками
			const base_background = 'https://images.wallpaperscraft.ru/image/single/nebo_oblaka_otrazheniia_86205_1280x720.jpg'
			return `center / cover no-repeat url(${ this.current_scene()?.bg || base_background })`
		}
		
	}
}
