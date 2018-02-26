import RedirectService from './redirect.service'

class RedirectUserController {
	constructor(RedirectService) {
		this.redirectService = RedirectService
	}

	$onInit() {
		if (localStorage.getItem('auth-token')) {
			this.redirectService.checkToken()
		} else {
			this.redirectService.getOut()
		}
	}
}

export const redirectUserComponent = {
	controller: RedirectUserController
}
