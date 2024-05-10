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

		step() {
			console.log( $mol_state_arg.value( 'step' ) )
			return $mol_state_arg.value( 'step' )
		}

		@$mol_mem
		current_scene() {
			return this.scenes()?.find( scene => scene.step === this.step() )
		}

		island_name(): string {
			return "🌌" + this.island()?.name || 'no name'
		}

		island_id(): string {
			return $mol_state_arg.value( 'island' ) || ''
		}

		question(): string {
			console.log('question', this.current_scene()?.question)
			return this.normalize_question(this.current_scene()?.question) || 'Поздравляю! Остров исследован'
		}

		normalize_question( question?: string ) {
			return question?.replaceAll( '@@', `#!p=i/island=${this.island_id()}/step=` )
		}

		@$mol_mem
		bg_url() {
			// https://wallpaperscraft.ru/wallpaper/nebo_oblaka_otrazheniia_86205 - Сайт с картинками
			const base_background = 'https://images.wallpaperscraft.ru/image/single/nebo_oblaka_otrazheniia_86205_1280x720.jpg'
			return `center / cover no-repeat url(${ this.current_scene()?.bg || base_background })`
		}

		leave( next?: any ) {
			console.log( 'leave' )
			$mol_state_arg.value( 'step', null )
			$mol_state_arg.value( 'island', null )
		}

	}
}
