import { Navigate, Outlet } from "react-router-dom";
import { useLoginContext } from "../context/LoginProvider";

const PrivateRouter = () => {
  const { user } = useLoginContext();


  return user?.email ? <Outlet /> : <Navigate to="/Login"/>
    
};

export default PrivateRouter;
