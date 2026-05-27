import axios from 'axios'

const API=axios.create({
    baseURL:"https://student-management-backend-1-8int.onrender.com"
})

export default API