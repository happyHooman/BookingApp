import { API } from '../../api.url'

class DayPickerService {
  constructor($http) {
    this.$http = $http
  }

  loadData(){
    const userId = localStorage.getItem('UID')
    const url = API.base + API.companies + '/' + userId
    return this.$http.get(url)
  }
}

export default DayPickerService
