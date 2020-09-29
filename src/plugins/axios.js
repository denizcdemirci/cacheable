import axios from 'axios';
import { cacheAdapterEnhancer, throttleAdapterEnhancer } from 'axios-extensions';

export default axios.create({
  baseURL: 'https://api.github.com/',
  headers: {
    'If-None-Match': '',
    accept: 'application/vnd.github.v3+json',
  },
  adapter: throttleAdapterEnhancer(cacheAdapterEnhancer(axios.defaults.adapter)),
});
