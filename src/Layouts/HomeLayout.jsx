import { Outlet } from "react-router-dom";
import Header from "../Componenst/Header";
import LatestNews from "../Componenst/LatestNews";
import Navbar from "../Componenst/Navbar";
import AllCategory from "./Home.Layout/AllCategory";



const HomeLayout = () => {
                    return (
                                        <div className="font-Poppins container mx-auto">
                                         <Header></Header> 
                                         <LatestNews></LatestNews>
                                         <nav className="w-11/12 mx-auto pt-6">
                                         <Navbar></Navbar>
                                         </nav>
                                         <main className="grid md:grid-cols-12 gap-5">
                                          <aside className="col-span-3"><AllCategory></AllCategory></aside> 
                                          <div className="col-span-6"><Outlet></Outlet></div> 
                                          <aside className="col-span-3"><h1>hello</h1></aside>                  
                                        </main>                  
                                        </div>
                    );
};

export default HomeLayout;