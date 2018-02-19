import { API } from '../../../api.url'

class ModalService {
  constructor($http){
    this.$http = $http
  }

  addBooking(booking){
		const url = API.base + API.bookings
		return this.$http.post(url, booking)
	}

  updateService(service){
    const url = API.base + API.services
    this.$http.put(url, service).then(res=>{
    }, err=>{
      console.log(err.data);
    });
  }
}

export default ModalService
