import React from 'react';
import { Link } from 'react-router-dom';
//  import { FaEye, FaStar } from 'react-icons/fa';
 
 const NewsCard = ({News}) => { 
    
const { title, author, publishedDate, details,image_url, rating, views } = News;
return ( 

<div className="card  bg-base-100 shadow-xl"> 
<figure className='p-5'> 
                    <img src={image_url} alt="Card Image" className=" object-cover w-full" /> 
                    </figure>
                     <div className="card-body"> 
                                        <h2 className="card-title text-xl font-bold">{title}</h2>
                                         <p className="text-sm text-gray-600">By {author.name}</p> 
                                         <p className="text-sm text-gray-500">{publishedDate}</p>
                                          <div className="flex items-center mt-2"> 
                                                            {/* <FaStar className="text-yellow-500 mr-1" /> */}
                                                             <span>{rating.number} ({rating.badge})</span>
                                                              </div>
                                                               <p className="mt-2">{details}</p>
                                                                <div className="flex items-center mt-4"> 
                                                                                {/* <FaEye className="text-gray-500 mr-1" /> */}
                                                                                 <Link to={`/news/${News._id}`}>{views} views</Link>
                                                                                  </div>
                                                                                   </div>
                                                                                    </div>)}

export default NewsCard;

// {
//                     "_id": "0282e0e58a5c404fbd15261f11c2ab6a",
//                     "others_info": {
//                         "is_todays_pick": false,
//                         "is_trending": true
//                     },
//                     "category_id": "01",
//                     "rating": {
//                         "number": 4.5,
//                         "badge": "Excellent"
//                     },
//                     "total_view": 488,
//                     "title": "Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet",
//                     "author": {
//                         "name": "Jimmy Dane",
//                         "published_date": "2022-08-24 17:27:34",
//                         "img": "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
//                     },
//                     "thumbnail_url": "https://i.ibb.co/QnwC4sG/unsplash-Eh-Tc-C9s-YXsw-11.png",
//                     "image_url": "https://i.ibb.co/M23fhxm/unsplash-Eh-Tc-C9s-YXsw.png",
//                     "details": "Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine, United States, Worthy News (Worthy News) – U.S. President Joe Biden has announced nearly $3 billion in new U.S. military aid for Kyiv as Ukraine marked its independence day six months after Russia invaded the country.'The United States of America is committed to supporting the people of Ukraine as they continue the fight to defend their sovereignty. As part of that commitment, I am proud to announce our biggest tranche of security assistance to date: approximately $2."
//                 }