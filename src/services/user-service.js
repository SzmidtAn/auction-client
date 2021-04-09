import axios from 'axios';
import authHeader from './auth-header';
import http from "../http-common";

const API_URL = 'http://localhost:8080/api/';

class UserService {

    getAll() {
        return axios.get(API_URL + 'items', { headers: authHeader() });
    }

    get(id) {
        return axios.get(API_URL + `items/${id}`, { headers: authHeader() });
    }

    createNewItem(data) {
        return axios.post(API_URL + 'items', { headers: authHeader(), data: data });


    }

    update(id, data) {
        return http.put(`/api/items/${id}`, data);
    }

    delete(id) {
        return http.delete(`/api/items/${id}`);
    }

    deleteAll() {
        return http.delete(`/api/items`);
    }

    findByTitle(title) {
        return http.get(`/api/items?title=${title}`);
    }


}

export default new UserService();