import Cross from './assets/cross.png';
import Menu from './assets/menu.png';
import Blue from './assets/image.png';
import Brain_blue from './assets/brain-blue.png';
import Arrow from './assets/ArrowUp3.png';
import Brain from './assets/brain.png';
import Space from './assets/space.png';

import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import '../App.css'

function Main() {
    const [isActive, setIsActive] = useState(false);

    const handleClick = event => {
        // 👇️ toggle isActive state on click
        setIsActive(current => !current);
    };
    return (
        <div className='Main'>
            <nav>
                <h1 className='title'> IQ Test</h1>
                <div id="menu">
                    <div id="menu-bar" onClick={handleClick}>
                        <img src={isActive ? Cross : Menu} className='menu-img' alt="" />
                    </div>
                    <div className={`nav ${isActive ? "change" : ""}`} id="nav">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Blog</a></li>
                        </ul>
                    </div>
                </div>

                <div className={`menu-bg ${isActive ? "change-bg" : ""}`} id="menu-bg"></div>
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
            </nav>

        
            <div className='MainText' style={{ backgroundImage: `url(${Space})` }}>
                <p className='MainWhiteText'> Пройдите точный и быстрый </p>
                <p className='yellow'>тест на<br /> определение IQ </p>
                <img src={Brain_blue} className='Brain_blue' alt="" /><br />
                <Link to="/quizes"><button className='yellowBtn'> Пройти тест </button></Link>
                <p className='yellowSmall'>и получите рекомендации по развитию своего интеллекта и<br /><span className='MainWhiteText'> улучшению финансового благосостояния и личной жизни</span></p>
                <img className='arrow' src={Arrow} alt="" />
            </div>



            <div className='qoute' style={{ backgroundImage: `url(${Blue})` }}>
                <div className='gradient'>
                    <div className='q_left'>&ldquo;</div><p className='qoute_p'>Профессиональный IQ-тест позволяет не только определить коэффициент вашего интеллекта,
                        но и выработать список рекомендаций для повышения этого показателя. </p><div className='q_right'>&rdquo;</div>
                </div>
            </div>


            <div className='third'><p> Также по результатам теста
                <b> вы получите </b> подробные советы по определению наиболее перспективной <b> для вашего типа интеллекта сферы деятельности, </b>
                которая принесет вам скорейший финансовый результат.</p>
                <img className='brain' src={Brain} alt="" />
                <a href="#"> <button className='yellowBtn'> Пройти тест </button></a>
            </div>


            <div className='four'  style={{ backgroundImage: `url(${Space})` }}>
                <p>Прохождение теста займет у вас не более <span className='yellowSmall'> 12 минут</span>, а его результаты вы сможете использовать всю жизнь.
                </p>
                <p className='gray-bg'>Профессиональная интерпретация и детально проработанные рекомендации позволят вам качественно изменить все аспекты своей жизни: от финансового до любовного.</p>
                <a href="#"> <button className='yellowBtn'> Пройти тест </button></a>
                <footer>@2023</footer>
            </div>
            <Outlet />

        </div>

    )
}
export default Main