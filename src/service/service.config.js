import axios from "axios";

const service=axios.create({
    baseURL:import.meta.env.VITE_SERVER_URL
})

//busca token en el navegador y lo envia
service.interceptors.request.use((config)=>{

    const storedToken=localStorage.getItem("authToken")
    if(storedToken){
        config.headers.authorization= `Bearer ${storedToken}`
    }

    return config
})


export default service
    
