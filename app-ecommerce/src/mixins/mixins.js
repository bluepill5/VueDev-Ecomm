import axios from 'axios';

export default {
    data () {
        return {
            URL_API: 'https://6293bdfa089f87a57ac55c48.mockapi.io/api/',
        }
    },
    methods: {
        async GetProductsWithAxios() {
            await axios.get(`${this.URL_API}/products`)
                .then(response => {
                    return response.data;
                })
                .then(data => {
                    this.products = data;
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }
}