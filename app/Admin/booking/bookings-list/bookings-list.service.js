import {API} from '../../../api.url'

class BookingListService {
	constructor($http) {
		this.$http = $http
	}

	loadBookings() {
		const url = API.base + API.bookings
		return this.$http.get(url)
	}
}

export default BookingListService
