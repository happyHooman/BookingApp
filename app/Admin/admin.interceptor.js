import { API } from '../api.url'


class AdminInterceptor {
  constructor() {

  }

  request(config){
    if (checkConditions()) {
      config.headers = config.headers || {};
      config.headers.Authorization = localStorage.getItem('auth-token')
    }
    console.log(config.headers);
    return config

    function checkConditions(){
      if(config.url===API.base+API.bookings){
        return true
      } else {
      return false
      }
    }
  }
}

export default AdminInterceptor;
