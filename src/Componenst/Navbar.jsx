import React, { useContext } from 'react';
import useri from '..//assets/user.png'
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Navbar = () => {

const {user,logOut} = useContext(AuthContext)
                    return (
                                        <div className='flex justify-between items-center my-10'>
                                       <div>{user?.email}</div>
                                       <div className='gap-3 flex text-xl font-medium'>
                                        <NavLink className={'btn'} to={'/'}>Home</NavLink>
                                        <NavLink className={'btn'} to={'/about'}>About</NavLink>
                                        <NavLink className={'btn'} to={'/career'}>Career</NavLink>
                                        </div> 
                                       <div className='flex gap-3 items-center'>
                                        {user && user?.email ? <div className='flex items-center'>
                                                            <p>{user?.displayName}</p>
                                                            <img className='w-20 rounded-full' src={user?.photoURL} alt="" />
                                        </div>  : <img src={useri} alt="" />}
                                        {user ? <button onClick={logOut} className='btn bg-black text-white'>Log Out </button> : <Link to={'/auth/login'} className='btn bg-black text-white'>Log In </Link>}
                                        </div>                    
                                        </div>
                    );
};

export default Navbar;