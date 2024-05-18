namespace $.$$ {
	export class $sib_app extends $.$sib_app {

		@$mol_mem
		user() {
			return this.realm().home().hall_by( $sib_user, $hyoo_crus_rank_public )
		}

		hero_name(): string {
			return this.user() ? `${this.user()?.Username()?.val()}@${this.user()?.ref().description}` : '-'
		}

	}
}
