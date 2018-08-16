import axios from 'axios'

axios.defaults.baseURL = 'http://api.nex-mile.com'

export default {
  getCategroy: function (id) {
    return axios.get('/category/list/' + id)
  }
}
