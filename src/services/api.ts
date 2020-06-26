import axios from 'axios';

const api = axios.create({
baseURL: 'http://ec2-3-93-14-8.compute-1.amazonaws.com/',
});

export default api;
