import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const LatestNews = () => {
                    return (
                                        <div className='w-11/12 mx-auto flex items-center rounded-xl bg-base-300'>
                                        <p className='bg-[#D72050] rounded-xl text-white py-2 px-5'>Latests</p>  
                                       <p className='px-5'>
                                       <Marquee  speed={50} pauseOnHover >
                                       <div className='flex  gap-5'>
                                       <Link to={'/news'}> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo iusto molestias quae commodi......</Link>                    
                                        <Link to={'/news'}> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo iusto molestias quae commodi......</Link>                    
                                        <Link to={'/news'}> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo iusto molestias quae commodi......</Link>                    
                                        <Link to={'/news'}> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo iusto molestias quae commodi......</Link>
                                        </div>                    
                                        </Marquee> 
                                        </p>                 
                                        </div>
                    );
};

export default LatestNews;