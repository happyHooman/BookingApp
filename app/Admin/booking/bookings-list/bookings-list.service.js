import {API} from '../../../api.url'

class BookingListService {
	constructor($http) {
		this.$http = $http
	}

	loadBookings() {
		const url = API.base + API.bookings
		const token = localStorage.getItem('auth-token')
		return this.$http({
			method: 'GET',
			headers: {'Authorization': token},
			url
		})
	}
}

export default BookingListService
