import axios from 'axios';
import { baseURL } from '../constant/utils';

const apiService = axios.create({ baseURL });

export { apiService };