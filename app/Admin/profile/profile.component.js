import template from './profile.template.html'
import { API } from '../../api.url'

class ProfileController {
	constructor($http, $location) {
		this._http = $http
    this._location = $location;
	}

	$onInit() {
		this.loadProfile()
  }

  signOut(){
		if(confirm("Are You Shure You Want To Sign Out?")){
    localStorage.removeItem('auth-token')
    localStorage.removeItem('UID')
		this._location.path('/')
		}
  }

	loadProfile(){
			const url = API.base + API.companies
			const userId = localStorage.getItem('UID')
			this._http({
				method: 'GET',
				params: {userId},
				url
			}).then(res => {
				this.company = res.data
			}, err=>{
				console.log(err);
			})
	}

	saveSettings(){
		const url = API.base + API.companies
		const token = localStorage.getItem('auth-token')
		const data = this.company
		this._http({
			method: 'PUT',
			headers: {'Authorization': token},
			data,
			url
		}).then(res=>{
			console.log(res.data);
			alert('Your changes have been saved!')
		})
	}
}

export const profileComponent = {
	controller: ProfileController,
	controllerAs: '$ctrl',
	template,
}
