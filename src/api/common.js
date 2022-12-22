import { message } from "antd"
import axios from "axios"
const base = "http://localhost:3000"

export default function ajax(url,data={},method="GET") {
    url = base + url
    return new Promise((resolve,reject)=>{
        let resp
        if (method === "GET") {
            resp = axios.get(url,{params: data})
        }else if (method === "POST") {
            resp = axios.post(url, data)
        }

        resp.then(value=>{
            resolve(value.data)
        }).catch(e=>{
            // console.log("err = ",e)
            message.error(e.response.data.message||"error", 10)
        })
    })
}