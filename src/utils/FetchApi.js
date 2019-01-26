import axios from 'axios';

const FetchApi = (method, url, params) => {
    // if (process.env.REACT_APP_SERVER_ENVIORNMENT === "dev") {
        url = 'http://localhost:8000' + url
    // }
    // else {
        // url = 'http://api.ecelliitr.org' + url
        return new Promise((resolve, reject) => {
            axios({
                method: method,
                url: url,
                data: params,
                responseType: 'json'
            })
                .then(res => resolve(res))
                .catch(err => reject(err))

        })
    }
// }

export default FetchApi;