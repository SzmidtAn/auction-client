import http from "../http-common";

class AuctionsDataService {




    getAll() {
        return http.get("/api/items");
    }

    get(id) {
        return http.get(`/api/items/${id}`);
    }

    create(data) {
        return http.post("/api/items", data);
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

export default new AuctionsDataService();