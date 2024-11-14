import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Header from '../Componenst/Header';

const NewsDesign = () => {
const data = useLoaderData()
const news = data.data[0]
console.log(news);


                    return (
                                        <div className='container mx-auto'>
                                                            <Header></Header>
                                                            <div className='grid md:grid-cols-12 gap-7'>
                                                                                <section className='col-span-9 border'>
                                                                                <div className="card bg-base-100 shadow-xl">
                                                            <figure className="px-10 pt-10">
                                                            <img
                                                            src={news.image_url}
                                                            alt="Shoes"
                                                            className="rounded-xl" />
                                                            </figure>
                                                            <div className="card-body items-center text-center">
                                                            <h2 className="card-title">{news?.title}</h2>
                                                            <p>{news?.details}</p>
                                                            <div className="card-actions">
                                                            <Link to={`/category/${news?.category_id
}`} className="btn btn-primary">Back to Category</Link>
                                                            </div>
                                                            </div>
                                                            </div>
                                                                                </section>
                                                                                <aside className='col-span-3'>hello</aside>
                                                            </div>
                                                            
                                        </div>
                    );
};

export default NewsDesign;