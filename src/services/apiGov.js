import axios from 'axios'

export default  axios.create({
    baseURL: 'http://dados.recife.pe.gov.br/api/3/action/'
})