import React from 'react'
import img from "../assets/motorola-moto-g4-3.jpg";


export const Details = () => {

    return (
        <div className="row">
            <h3 className="ms-5">Smartphones</h3>
            <div className="container mt-3">
                <div className="mb-3 w-75">
                    <div className="row g-0">

                        <div className="col-md-3 p-0 text-center">
                            <img src={img} alt="..."
                                 className=""
                                 style={{'width': 200, 'height': 250}}/>
                        </div>

                        <div className="col-md-9">
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
