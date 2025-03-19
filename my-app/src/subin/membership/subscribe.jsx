import React from 'react';
import './subscribe.css';
import Header from '../main/Header.jsx';
import Footer from '../main/Footer.jsx';

const Subscribe = () => {
    return (
        <div className="main">
            <Header />
            <div className="innerBox">
                <span>한눈에 보는 FITME 멤버십 혜택</span>
            </div>
            <div className="benefit">
                <span className="Grade">플러스</span>
                <div class="svg-wrapper">
                    <svg height="60" width="190" xmlns="http://www.w3.org/2000/svg">
                        <rect class="shape" height="60" width="190"></rect>
                    </svg>
                    <div class="text">플러스 구독하기</div>
                </div>
            </div>


            <Footer />
        </div>
    );
};

export default Subscribe;
