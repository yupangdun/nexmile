import axios from 'axios'

axios.defaults.baseURL = 'http://api.nex-mile.com'

export default {
  getCategroy: function (id) {
    return axios.get('/category/list/' + id)
  },
  getNews: function (pageNo = 0, pageSize = 15) {
    return axios.get(`/new/list?pageNo=${pageNo}&pageSize=${pageSize}`)
  }
}
