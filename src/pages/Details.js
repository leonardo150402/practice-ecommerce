import React, {useRef, useState} from 'react'
import img from "../assets/motorola-moto-g4-3.jpg";
import {useLocation} from "react-router-dom";
import {useQuery} from "../hooks/use-query";
import dotenv from "dotenv";

export const Details = () => {
    require('dotenv').config()
    const [quantity, setQuantity] = useState(1)
    const location = useLocation()
    const query = useQuery(location.search)
    const refContainer = useRef(null)
    const refButton = useRef(null)

    const data = {
        img: query.get('img'),
        title: query.get('title'),
        price: parseFloat(query.get('price')),
        unit: parseInt(query.get('unit')),
    }

    const handleClick = (count) => {
        if (quantity + count > 0) {
            setQuantity(quantity + count)
        }
    }

    const handleCheckOut = () => {
        refButton.current.disabled = true

        const preference = {
            payer: {
                name: "Lalo",
                surname: "Landa",
                email: "test_user_46542185@testuser.com",
                phone: {
                    area_code: "52",
                    number: 5549737300
                },
                identification: {
                    type: "DNI",
                    number: "22334445"
                },
                address: {
                    zip_code: "03940",
                    street_name: "Insurgentes Sur",
                    street_number: 1602
                }
            },
            items: [
                {
                    id: "1234",
                    picture_url: "https://shionaoi-mp-commerce-nodejs.herokuapp.com/assets/samsung-galaxy-s9-xxl.jpg",
                    // title: "Samsung Galaxy S9",
                    title: data.title,
                    description: "Dispositivo móvil de Tienda e-commerce",
                    quantity: quantity,
                    unit_price: data.price
                }
            ],
            external_reference: "javier.jail.cornejo@gmail.com",
            payment_methods: {
                excluded_payment_methods: [
                    {
                        id: "diners"
                    }
                ],
                excluded_payment_types: [
                    {
                        id: "atm"
                    }
                ],
                installments: 6,
            },
            back_urls: {
                success: `${process.env.REACT_APP_URL_FRONT}/success`,
                pending: `${process.env.REACT_APP_URL_FRONT}/pending`,
                failure: `${process.env.REACT_APP_URL_FRONT}/failure`
            },
            auto_return: "approved",
            notification_url: `${process.env.REACT_APP_URL_BACK}/mercado/notifications?source_news=webhooks`
        }

        console.log('preference', preference)
        fetch(`${process.env.REACT_APP_URL_BACK}/mercado/create_preference`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(preference)
        }).then((result) => {
            console.log(result)
            return result.json()

        }).then((preference) => {
            const script = document.createElement("script");
            console.log(preference)

            // The source domain must be completed according to the site for which you are integrating.
            // For example: for Argentina ".com.ar" or for Brazil ".com.br".
            script.src = "https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js";
            script.type = "text/javascript";
            script.dataset.preferenceId = preference.preference_id
            refContainer.current.innerHTML = "";
            refContainer.current.appendChild(script)
        }).catch((e) => {
            console.log(e)
        })

        // document.getElementById("button-checkout").innerHTML = "hola daniel";
        // document.querySelector("#button-checkout").appendChild(script);
    }
    // <script
    //     src="https://www.mercadopago.com.pe/integrations/v1/web-payment-checkout.js"
    //     data-preference-id='1234'>
    // </script>

    return (

        <div className="row">
            <h3 className="ms-5">Smartphones</h3>
            <div className="container mt-3">
                <div className="mb-3 w-75">
                    <div className="row g-0">

                        <div className="col-md-3 p-0 text-center border">
                            <img src={data.img} alt="..."
                                 className=""
                                 style={{'width': 200, 'height': 250}}/>
                        </div>

                        <div className="col-md-3 border">
                            <div className="card-body">
                                <h5 className="card-title text-primary">Producto</h5>
                                <p className="card-text">
                                    <strong>PRECIO: </strong>
                                    <span className="text-success fw-bold">S/. {data.price}</span>
                                    <br/>
                                    <strong>MODELO: </strong> {data.title}
                                    <br/>
                                    <strong>RAM: </strong> 8GB
                                    <br/>
                                    <strong>CAMARA: </strong> 12MPX
                                    <br/>
                                    <strong>ALMACENAMIENTO: </strong> 64GB
                                    <br/>
                                    <strong>PANTALLA: </strong> AMOLED
                                    <br/>
                                    <strong>BATERIA: </strong> 4000mAh
                                    <br/>
                                    <strong>PROCESADOR: </strong> Snack dragon 654
                                    <br/>
                                </p>
                                {/*<p className="card-text"><small className="text-muted">Last updated 3 mins ago</small>*/}
                                {/*</p>*/}

                            </div>
                        </div>

                        <div className="col-md-3 border">
                            <div className="card-body">
                                <h5 className="card-title text-primary text-center">Cantidad</h5>
                                <div className="text-center">
                                    <input type="number"
                                           value={quantity}
                                           onChange={() => {
                                           }}
                                           className="form-control"/>
                                    <div className="form-group mt-3">
                                        <button type="button"
                                                onClick={() => handleClick(-1)}
                                                className="btn btn-primary mx-2">-
                                        </button>
                                        <button type="button"
                                                onClick={() => handleClick(+1)}
                                                className="btn btn-primary">+
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 border text-center">
                            <div className="card-body">
                                <h5 className="card-title text-primary">Cart</h5>
                                <br/>
                                <p className="fs-4">S/ {data.price * quantity}</p>
                                <p><strong>Subtotal</strong></p>
                                <br/>
                                <button type="button"
                                        ref={refButton}
                                        id="btn-checkout"
                                        onClick={handleCheckOut}
                                        className="btn btn-primary w-100">
                                    Pagar la compra
                                </button>
                                <div id="button-checkout"
                                     ref={refContainer}>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
