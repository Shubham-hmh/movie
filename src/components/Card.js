import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
const Card = () => {
    const [showsData, setShowsData] = useState([]);
    useEffect(() => {
        axios.get('https://api.tvmaze.com/search/shows?q=all')
            .then(response => {
                setShowsData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <>
          <div className="card  text-center bg-primary text-white">
            <h1>Whole Movie List  ......Data </h1>
        </div>
            <div className="container">
          {
            showsData.map((item,index)=>{
                return (
                  <div  className="col-12 col-md-6 col-lg-3" >
                  <div className="card shadow p-3 mb-5 bg-white rounded" key={index} style={{margin:"10px"}}>
                            <img className="card-img-top" src={item.show.image.medium} alt="Card image cap" />
                            <div className="card-body">
                                <h3 className="card-title">{item.show.name}</h3>
                                <h5 className="card-text">Status:{item.show.status}</h5>
                                <Link to={"/card/"+item.show.id} className="btn btn-secondary">Read More</Link>

                            </div>
                    </div>
                  </div>

                )
            })
          }
          </div>


        </>
    )
}

export default Card