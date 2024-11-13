import React from 'react';
import user from '..//assets/user.png'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
                    return (
                                        <div className='flex justify-between items-center'>
                                       <div></div>
                                       <div className='gap-3 flex text-xl font-medium'>
                                        <NavLink className={'btn'} to={'/'}>Home</NavLink>
                                        <NavLink className={'btn'} to={'/about'}>About</NavLink>
                                        <NavLink className={'btn'} to={'/career'}>Career</NavLink>
                                        </div> 
                                       <div className='flex gap-3 items-center'>
                                        <img src={user} alt="" />
                                        <button className='btn bg-black text-white'>Log IN</button>
                                        </div>                    
                                        </div>
                    );
};

export default Navbar;