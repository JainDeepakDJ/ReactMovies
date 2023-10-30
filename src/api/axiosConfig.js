import axios from "axios";

export default axios.create({
    baseURL:"https://djmovies.onrender.com",
    headers:{"Access-Control-Allow-Origin" : "*","Access-Control-Allow-Origin" : "http://localhost:3000/","Access-Control-Allow-Methods": "GET,PUT,POST,DELETE"}
})