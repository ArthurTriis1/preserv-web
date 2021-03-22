import axios from 'axios'

export default  axios.create({
    baseURL: 'https://preservbackend.herokuapp.com/api/v1'
})