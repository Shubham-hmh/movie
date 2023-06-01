import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { HiOutlineArrowLeft } from 'react-icons/hi';
import axios from 'axios';
import { useState, useEffect } from 'react';

const SingleCard = () => {
    const location = useLocation();
    const getBlogId = location.pathname.split("/")[2];
    const [singleShowData, setSingleShowsData] = useState([]);
    console.log(singleShowData);
    useEffect(() => {
        axios.get(`https://api.tvmaze.com/shows/${getBlogId}`)
            .then(response => {
                setSingleShowsData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);
    return (
        <div className="container">
            <div className="row">

                <div className="col-12">
                    <div className="single-blog-card shadow-lg p-3 mb-5 bg-white rounded">
                        <Link to="/" className='d-flex align-items-center gap-10'>
                        <HiOutlineArrowLeft className='fs-4' /> Go Back to Movies</Link>
                        <h3 className="title">
                            {singleShowData?.name}
                        </h3>
                        <img src={singleShowData?.image?.medium} alt="blog" />
                        <div className="d-flex">
                            <h5>Runtime: </h5>
                            <p className='mt-1'>{singleShowData?.runtime}</p>
                        </div>
                        <div className="d-flex ">
                            <h5>Language: </h5>
                            <p className='mt-1'>{singleShowData?.language}</p>
                        </div>
                        <div className="d-flex gap-10 flex-column  mb-3"><h3 className='product-heading'>Genres:</h3>
                            <div className="d-flex flex-wrap gap-15">
                                {
                                    singleShowData?.genres?.map((item, index) => {
                                        return (
                                            <span className="badge border border-1 bg-white text-dark border-secondary">{item}</span>

                                        )
                                    })
                                }

                            </div>
                        </div>


                        <p className="desc" dangerouslySetInnerHTML={{ __html: singleShowData?.summary }}></p>
                        <a href={singleShowData?.officialSite} className="btn btn-primary">Watch Show</a>

                    </div>
                </div>

            </div>
        </div>

    )
}

export default SingleCard