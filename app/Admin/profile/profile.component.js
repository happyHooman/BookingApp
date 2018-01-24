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
    localStorage.removeItem('userEmail')
    localStorage.removeItem('userInfo')
		this._location.path('/')
		}
  }

	loadProfile(){
		let email = JSON.parse(localStorage.getItem('userInfo')).email
		console.log(email);
		this._http.get(ApiUrl.base + ApiUrl.companies).then(res=>{
			this.company = res.data.filter(company=>company.email===email)[0]
			this.logoImg = this.company.logo? this.company.logo : "../Public/assets/logo.png"
		})
	}

	saveSettings(){
		// console.log(this.company);
		this._http.put(ApiUrl.base + ApiUrl.companies + this.company.id, this.company)
	}
}

export const profileComponent = {
	controller: ProfileController,
	controllerAs: '$ctrl',
	template,
}
