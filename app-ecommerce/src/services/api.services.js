import axios from "axios";

const URL_API = 'https://6293bdfa089f87a57ac55c48.mockapi.io/api/'

const api = {
    getProducts: async () => {
        try {
            let res = await axios.get(`${URL_API}/products`);
            return res.data;
        } catch (error) {
            console.log(error);
        }
    },
}

export default api;




