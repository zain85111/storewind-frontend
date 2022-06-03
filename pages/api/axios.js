import axios from "axios";

export default axios.create({
    baseURL: 'https://storewind.australiaeast.cloudapp.azure.com',
})