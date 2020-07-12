import axios from 'axios';

const instance = axios.create({
    baseURL:'http://localhost:4000'
});

instance.defaults.headers.post['Content-Type']='application/json';
instance.defaults.headers.get['Content-Type']='image/jpeg';
instance.defaults.headers.post['Access-Control-Allow-Origin']='*';


export default instance;