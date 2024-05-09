namespace $.$$ {
	export class $sib_about extends $.$sib_about {

		signup( next?: any ) {
			$sib_app.user( { login: this.name() } )
		}

		signup_allowed(): boolean {
			return this.name().length > 3
		}

		logout( next?: any ) {
			$sib_app.user( null )
		}

		body(): readonly any[] {
			return [this.About_text(), $sib_app.user() ? this.Logout() : this.Login()]
		}
	}
}
