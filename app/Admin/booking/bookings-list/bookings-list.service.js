import {API} from '../../../api.url'

class BookingListService {
	constructor($http, $q) {
		this.$http = $http
		this.deffered = $q.defer()
	}

	loadBookings() {
		const url = API.base + API.bookings
		const token = localStorage.getItem('auth-token')
		this.$http({
			method: 'GET',
			headers: {'Authorization': token},
			url
		}).then(res => {
			this.deffered.resolve(res.data)
		}, err => {
			this.deffered.reject(err.data)
		})
    return this.deffered.promise
	}
}

export default BookingListService
