import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';


import './Main.css';

const Main = () => {
    return (
        <div className="main">
            <Header />
            <img
                src="https://th.bing.com/th/id/R.de70f17b444f49376286c3f9697da8e4?rik=57x76rOyzMyBRg&riu=http%3a%2f%2fcdn.monews.co.kr%2fnews%2fphoto%2f202304%2f321888_88977_731.jpg&ehk=RN8MeAdIw673EVZWBZ81lei8Ph0TxmY74KIUka7GfG0%3d&risl=&pid=ImgRaw&r=0"
                alt="Image"
                className="main-img"
            />
            <div className="text-overlay">
                <p className="title">나만의 맞춤 플랜</p>
                <p className="subtitle">기록부터 변화가 시작됩니다.</p>
                <button className="cta-button">시작하기</button>
                <div className="newsletter-signup">
                    <form>
                        <label htmlFor="email">Subscribe to our newsletter:</label>
                        <input type="email" id="email" name="email" placeholder="Enter your email" />
                        <button type="submit">Subscribe</button><br />
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Main;
