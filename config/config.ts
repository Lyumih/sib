namespace $ {
	export class $sib_config extends $mol_object {

		/** Конфиг для обработки сцены */
		static scene() {
			return {
				/** Замена в шаблоне квеста - ссылка на следующую сцену  */
				next: '@@',
				/** Замена в шаблоне квеста - ссылка на следующего врага/предмета/умения */
				item: '@#',
				/** Замена в шаблоне квеста - бой */
				battle: '@~'
			}
		}
	}
}
