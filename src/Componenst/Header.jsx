import React from 'react';
import logo from '..//assets/logo.png'
import moment from 'moment';

const Header = () => {
                    return (
                                        <div className='flex flex-col justify-center items-center py-4 gap-3'>
                                        <div>
                                         <img className='w-[350px]' src={logo} alt="" />                    
                                        </div>
                                        <h3 className='text-gray-300 text-xl font-medium '>Journalism Without Fear or Favour</h3>
                                        <p>{moment().format('MMMM Do YYYY')}</p>                    
                                        </div>
                    );
};

export default Header;