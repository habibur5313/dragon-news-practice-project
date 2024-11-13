import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const AllCategory = () => {

const [categories,setCategories] = useState([])

useEffect(() => {
                    fetch('https://openapi.programming-hero.com/api/news/categories')
                    .then(res => res.json())
                    .then(data => setCategories(data.data.news_category
                    ))
},[])



                    return (
                                        <div>
                                       <h2>All Categories ({categories.length})</h2>  
                                      <div className='flex flex-col items-center gap-4 mt-4'>
                                      {categories.map(category => <NavLink to={`/category/${category.category_id}`} key={category.category_id} className='btn w-full' >{category.category_name}</NavLink>)}
                                        </div>               
                                        </div>
                    );
};

export default AllCategory;