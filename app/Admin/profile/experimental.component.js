import template from './experimental.template.html'

class ExperimentalController {
	constructor($http) {
		this._http = $http
		this.username = "vasi7le@mail.com"
		this.password = 'test'
		this.loggedIn = false
	}

	$onInit() {
		this.checkLogin()
	}

	checkLogin(){
		if (localStorage.getItem('auth-token')) {
			this.loggedIn = true
		}
	}

	login() {
		const url = API.base + API.signin
		const userdata = {
			email: this.username,
			password: this.password
		}
		this._http.post(url,userdata).then(res => {
			this.info = 'success'
			if (res.data.token) {
				localStorage.setItem('auth-token', res.data.token)
				this.loggedIn = true
			}
		}, err=>{
			console.log(err);
			this.info = err.data
		})
	}

	logout(){
		this.info=''
		localStorage.removeItem('auth-token')
		this.loggedIn = false
	}

	getCompanies(){
		const url = API.base + API.companies
		this._http.get(url).then(res => {
			console.log(res.data);
			this.info = res.data.data
		}, err=>{
			console.log(err);
			this.info = err.data
		})
	}

	getServices(){
		const url = API.base + API.services
		this._http.get(url).then(res => {
			console.log(res.data);
			this.info = res.data.data
		}, err=>{
			console.log(err);
			this.info = err.data
		})
	}

	getCurrentUser(){
		if (this.loggedIn) {
			const url = API.base + API.me
			const token = localStorage.getItem('auth-token')
			this._http({
				method: 'GET',
				headers: {'Authorization': token},
				url
			}).then(res=>{
				this.info = res.data
			})
		} else {
			this.info = 'log in first!'
		}
	}

	createUser(){
		const url = API.base + API.signup
		const userdata = {
			email: this.username,
			password: this.password
		}
		this._http.post(url, userdata).then(res => {
			console.log(res.data);
			this.info = res.data.msg
		}, err=>{
			console.log(err);
			this.info = err.data.error
		})
	}


}

const API = {
	base: 'http://localhost:3800/',
	signin: 'users/signin',
	signup: 'users/signup',
	me: 'users/me',
	companies: 'db/companies',
	services: 'db/services'
}


export const experimentalComponent = {
	controller: ExperimentalController,
	controllerAs: '$ctrl',
	template,
}
