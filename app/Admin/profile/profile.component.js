import template from './profile.template.html'
import { ApiUrl } from '../../ApiUrl.constants'

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
    localStorage.removeItem('userInfo')
		this._location.path('/')
		}
  }

	loadProfile(){
		let email = JSON.parse(localStorage.getItem('userInfo')).email
		let url = ApiUrl.base + ApiUrl.companies + '?email=' + email
		this._http.get(url).then(res=>{
			this.company = res.data[0]
		})
	}

	saveSettings(){
		this._http.put(ApiUrl.base + ApiUrl.companies + this.company.id, this.company)
		alert("Profile Saved");
	}
}

export const profileComponent = {
	controller: ProfileController,
	controllerAs: '$ctrl',
	template,
}
