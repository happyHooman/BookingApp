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

				this.loggedIn = true
				localStorage.setItem('auth-token', res.data.token)
				this.getCurrentUser()
			}
		}, err=>{
			console.log(err);
			this.info = err.data
		})
	}

	logout(){
		this.info=''
		localStorage.removeItem('auth-token')
		localStorage.removeItem('UID')
		this.loggedIn = false
	}

	getCompany(){
		if (this.loggedIn) {
			const url = API.base + API.companies
			const userId = localStorage.getItem('UID')
			this._http({
				method: 'GET',
				params: {userId},
				url
			}).then(res => {
				console.log(res.data);
				this.company = res.data
				this.info = 'success'
			}, err=>{
				console.log(err);
				this.info = err.data
			})
		} else {
			console.log('please log in first');
			this.info = 'please log in first'
		}
	}

	saveCompany(){
		const url = API.base + API.companies
		const token = localStorage.getItem('auth-token')
		const data = this.company
		this._http({
			method: 'PUT',
			headers: {'Authorization': token},
			data,
			url
		}).then(res=>{
			console.log('success');
			this.info = res.data
			console.log(res.data);
		})
	}

	getServices(){
		const url = API.base + API.services
		this._http.get(url).then(res => {
			console.log(res.data);
			this.services = res.data
		}, err=>{
			console.log(err);
			this.info = err.data
		})
	}

	createService(){
		if (this.loggedIn) {
			const url = API.base + API.services
			const token = localStorage.getItem('auth-token')

			// add companyId before call to server
			const data = this.service
			this._http({
				method: 'POST',
				headers: {'Authorization': token},
				data,
				url
			}).then(res => {
				console.log(res.data);
				this.info = res.data
			}, err=>{
				console.log(err);
				this.info = err.data
			})
		} else {
			console.log('please log in first');
		}
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
				this.info = res.data.id
				localStorage.setItem('UID', res.data.id)
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
			this.info = res.data
		}, err=>{
			console.log(err);
			this.info = err.data
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
