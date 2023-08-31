import axios from "axios";

const service=axios.create({
    baseURL:"http://localhost:5005/api"
})

//busca token en el navegador y lo envia
service.interceptors.request.use((config)=>{

    const storedToken=localStorage.getItem("authToken")
    if(storedToken){
        config.headers.Authorization= `Bearer  ~${storedToken}`
    }


})


export default service
    
