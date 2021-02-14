import React from 'react'
import {useLocation} from "react-router-dom";
import {useQuery} from "../../hooks/use-query";

export const Success = () => {
    const location = useLocation()
    const query = useQuery(location.search)
    console.log('params', location.search)
    const data = {
        collection_id: query.get('collection_id'),
        collection_status: query.get('collection_status'),
        external_reference: query.get('external_reference'),
        payment_type: query.get('payment_type'),
        preference_id: query.get('preference_id'),
        site_id: query.get('site_id'),
        processing_mode: query.get('processing_mode'),
        merchant_account_id: query.get('merchant_account_id')
    }
    console.log(JSON.stringify(data))
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-sm-offset-3">
                    <div className="card text-center">
                        <div className="card-body">
                            <h2 style={{"color": "#0fad00"}}>
                                Success
                            </h2>
                            <p>Payment Method Id <strong>{data.payment_type}</strong></p>
                            <p style={{fontSize: "20px", color: "#5C5C5C"}}>
                                Thank you for verifying your Mobile No.We have sent
                                you an email "faisalkhan.chat@gmail.com" with your details
                                Please go to your above email now and login.
                            </p>
                            <a href="" className="btn btn-success"> Log in </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
