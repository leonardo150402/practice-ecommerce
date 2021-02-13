import React from 'react'
import logo from '../assets/music-audio-alp-201709.jpg'

export const Header = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <div className="pd-billboard-background">
                    <img src={logo} alt="" width="1440" height="320" data-scale-params-2="wid=2880&amp;hei=640&amp;fmt=jpeg&amp;qlt=95&amp;op_usm=0.5,0.5&amp;.v=1503948581306" className="pd-billboard-hero ir"/>
                </div>
            </div>
        </nav>
    )
}
