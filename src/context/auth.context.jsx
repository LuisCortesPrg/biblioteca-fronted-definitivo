import { createContext, useEffect, useState } from "react";
import service from "../service/service.config";

const AuthContext = createContext();

function AuthWrapper(props) {
  const [isUserActive, setIsUserActive] = useState(false);
  const [activeUserId, setActiveUserId] = useState(null);
  const [isPageLoading, setIsPageLoading]=useState(true)
  const [activeUserRole, setActiveUserRole]=useState(null)

  useEffect(()=>{
    verifyToken() 
  },[])
  

  const verifyToken = async () => {
    setIsPageLoading(true) //poner spinner

    try {
      const response = await service.get("/auth/verify");
      console.log(response);
      setIsUserActive(true);
      setActiveUserId(response.data._id);
      setIsPageLoading(false)
      setActiveUserRole(response.data.role)

    } catch (error) {
      console.log(error);
      setIsUserActive(false);
      setActiveUserId(null);
      setIsPageLoading(false)
    }
  };

  const passedContext = {
    verifyToken,
    isUserActive,
    activeUserId,
    activeUserRole
  };

  //clausuladeGuardia
  if(isPageLoading===true){
    return <h3>validando credenciales</h3>
  }

  return (
    <AuthContext.Provider value={passedContext}>
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthWrapper };
