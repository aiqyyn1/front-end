

import axios from 'axios'
function Api()
const api = axios.create({
  baseURL: 'http://localhost:8080/'
});
export default Api;