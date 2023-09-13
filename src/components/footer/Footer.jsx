import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Thanks for watching!</h1>
                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer__link">Projects</a>
                    </li>

                    <li>
                        <a href="#testimonials" className="footer__link">Testimonials</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href="https://linkedin.com/in/tqtinh2312" className="footer__social-link" target='_blank'>
                        <i className="uil uil-linkedin"></i>
                    </a>
                    <a href="https://facebook.com/huoune23" className="footer__social-link" target='_blank'>
                        <i className="uil uil-facebook"></i>
                    </a>
                    <a href="https://github.com/Tran-development/" className="footer__social-link" target='_blank'>
                        <i className="uil uil-github-alt"></i>
                    </a>
                </div>

                <span className="footer__copy">
                    &#169;Coded by Tran Quoc Tinh 2021.
                </span>
            </div>
        </footer>
    )
}

export default Footer