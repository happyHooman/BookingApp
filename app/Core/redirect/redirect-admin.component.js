import RedirectService from './redirect.service'

class RedirectAdminController {
	constructor(RedirectService) {
		this.redirectService = RedirectService
	}

	$onInit() {
		if (localStorage.getItem('auth-token')) {
			this.redirectService.checkToken(true)
		}
	}
}

export const redirectAdminComponent = {
	controller: RedirectAdminController
}
