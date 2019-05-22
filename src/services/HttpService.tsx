import axios from 'axios';

const API_URL = 'https://ski-rent-api.herokuapp.com';

class WebApi {
    static get(endPoint: string, configs?: any) {
        return new Promise((resolve, reject) => {
            axios.get(`${API_URL}${endPoint}`, configs)
                .then(response => resolve(response))
                .catch(error => reject(error))
        })
    }

    static post(endPoint: string, params: any, configs?: any) {
        
        return new Promise((resolve, reject) => {
            axios.post(`${API_URL}${endPoint}`, params, configs)
                .then(response => resolve(response))
                .catch(error => reject(error))
        })
    }

    static delete(endPoint: string, configs?: any) {
        return new Promise((resolve, reject) => {
            axios.delete(`${API_URL}${endPoint}`, configs)
                .then(response => resolve(response))
                .catch(error => reject(error))
        })
    }

    static patch(endPoint: string, params: any, configs?: any) {
        
        return new Promise((resolve, reject) => {
            axios.patch(`${API_URL}${endPoint}`, params, configs)
                .then(response => resolve(response))
                .catch(error => reject(error))
        })
    }

}

export default WebApi;