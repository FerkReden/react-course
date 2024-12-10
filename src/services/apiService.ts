import axios from "axios";

import { baseURL } from "../constants/utils";

const apiService = axios.create({baseURL});

export { apiService }