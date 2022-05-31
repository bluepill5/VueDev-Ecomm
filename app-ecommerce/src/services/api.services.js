import axios from "axios";

const URL_API = 'https://6293bdfa089f87a57ac55c48.mockapi.io/api/';
const URL_API_2 = 'https://62957bbd63b5d108c19e9182.mockapi.io/api/';

const api = {
    getProducts: async () => {
        try {
            let res = await axios.get(`${URL_API}/products`);
            return res.data;
        } catch (error) {
            console.log(error);
        }
    },
    getUsers: async () => {
        try {
            let res = await axios.get(`${URL_API_2}/users`);
            return res.data;
        } catch (error) {
            console.log(error);
        }
    },
    postUser: async (user) => {
        try {
            let user_response = await axios.post(`${URL_API_2}/users`, user);
            return user_response;
        } catch (error) {
            console.log(error);
        }
    }
}

export default api;




