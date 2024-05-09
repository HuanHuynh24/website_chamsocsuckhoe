import axios from "axios";

const request = axios.create({
    baseURL: "http://127.0.0.1:8080/api/"
})

export const get = async (path, option={})=>{
    const response = await request.get(path, option)
    return response.data
}
export const post = async (path, option={})=>{
        const response = await request.post(path, option)
        return response.data
}

export default request