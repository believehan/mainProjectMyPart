import React from 'react';
import './Footer.css';
import './logo/logo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'; 

const Footer = () => {
    return (
        <footer className="Footer">
            <div className="footer-content">
                <div className="contact-info">
                </div>
            </div>

           
                
                <div className="social-links">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebook} size="2x" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTwitter} size="2x" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                </div>
                <div className='company'>    
                    <p>(주) 핏미 | 대표 : 김지수, 한믿음, 박수빈</p>
                    <p>이메일 : FitMe@outlook.com (T. 010 - 1234 - 5678)</p>
                    <p>주소 : 경기도 부천시 부천로29번길 7 (심곡동)</p>
                    <p>사업자등록번호: 000 - 00 - 000 </p>
                    </div>
            
                <p>© 2025 FITME. All Rights Reserved</p>
        </footer>
    );
};

export default Footer;
