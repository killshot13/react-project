import React from 'react'
import homeImg from './homeImg.png'
import { Link } from 'react-router-dom';
import Navbar from './../nav/Navbar.js'
import { LineChart, Line } from 'recharts';
import Graph from '../Graph'
import Parallax from 'react-rellax'

const Home = () => {
    const heroImg = {
        background: `linear-gradient( #11999e6e, #11999e6e ), url(${homeImg}) center no-repeat fixed`,
        width: '100%',
        height: '530px',
        display: 'flex',
        alignItems: 'center'
    }

    const data = [{ name: 'Page A', uv: 400 }, { name: 'Page B', uv: 400 }, { name: 'Page C', uv: 400 }, { name: 'Page D', uv: 425 }];

    // background: linear-gradient( #11999e6e, #11999e6e ), url('./images/undraw_programming_2svr.svg') center no-repeat fixed;
    // backgroundImage: `url(${homeImg})`

    return (
        <div>
            <Navbar />
            <div style={heroImg}>
                <Parallax speed={8}>
                    <p style={{ fontSize: '30px', color: 'blueviolet', backgroundColor: 'rgba(0,0,0,0.6)', width: '30vh', textAlign: 'center', marginLeft: '5vh' }}>Hack Your Crypto Portfolio</p>
                </Parallax>
            </div>
            <div style={{backgroundColor: 'black', height: '700px'}}>
            <Link to="/coin">Go to coin</Link>
            <Graph />
            </div>

            
        </div>
    )
}
export default Home