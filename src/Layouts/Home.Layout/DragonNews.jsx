import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from './NewsCard';


const DragonNews = () => {

                    const {data: news} = useLoaderData()
                    console.log(news);
                    
                    return (
                                        <div className='w-11/12 mx-auto'>
                                        <h2 className='font-semibold text-xl'>Dragon News Home</h2>
                                        <p>{news.length}news in this category</p>
                                        <div className='flex flex-col gap-4 mt-2'>
                                         {news.map(singleNews => <NewsCard News={singleNews}></NewsCard>)}                  
                                        </div>
                                        </div>
                    );
};

export default DragonNews;