import { Outlet } from "react-router-dom";
import Navbar from "../Componenst/Navbar";


const AuthLayout = () => {
                    return (
                                        <div className="py-5 container mx-auto">
                                         <Navbar></Navbar>  
                                         <Outlet></Outlet>                 
                                        </div>
                    );
};

export default AuthLayout;