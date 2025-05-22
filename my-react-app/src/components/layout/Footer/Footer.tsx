import React from "react";
import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__top">
                <div className="footer__container-grid">
                    {/* Комания */}
                    <div className="footer__section">
                        <h3 className="footer__title">COMPANY</h3>
                        <ul className="footer__list">
                            <li className="footer__item">About Last.fm</li>
                            <li className="footer__item">Contact Us</li>
                            <li className="footer__item">Jobs</li>
                            <li className="footer__item">Features</li>
                        </ul>
                    </div>

                    {/* Помощь */}
                    <div className="footer__section">
                        <h3 className="footer__title">HELP</h3>
                        <ul className="footer__list">
                            <li className="footer__item">Track My Music</li>
                            <li className="footer__item">Community Support</li>
                            <li className="footer__item">Community Guidelines</li>
                            <li className="footer__item">Help</li>
                        </ul>
                    </div>

                    {/* Плюшки */}
                    <div className="footer__section">
                        <h3 className="footer__title">GOODIES</h3>
                        <ul className="footer__list">
                            <li className="footer__item">Download Scrobbler</li>
                            <li className="footer__item">Developer API</li>
                            <li className="footer__item">Free Music Downloads</li>
                            <li className="footer__item">Merchandise</li>
                        </ul>
                    </div>

                    {/* Аккаунт */}
                    <div className="footer__section">
                        <h3 className="footer__title">ACCOUNT</h3>
                        <ul className="footer__list">
                            <li className="footer__item">Inbox</li>
                            <li className="footer__item">Settings</li>
                            <li className="footer__item">Last.fm Pro</li>
                            <li className="footer__item">Logout</li>
                        </ul>
                    </div>

                    {/* Социальные сети и язык */}
                    <div className="footer__section">
                        <h3 className="footer__title">FOLLOW US</h3>
                        <div className="footer__list">
                            <li className="footer__item">Facebook</li>
                            <li className="footer__item">X</li>
                            <li className="footer__item">Bluesky</li>
                            <li className="footer__item">Instagram</li>
                            <li className="footer__item">YouTube</li>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer__bottom">
                <div className="footer__container">
                    <div className="footer__language">
                        <span className="footer__language-item">English</span>
                        <span className="footer__language-item">Deutsch</span>
                        <span className="footer__language-item">Español</span>
                        <span className="footer__language-item">Français</span>
                        <span className="footer__language-item">Italiano</span>
                        <span className="footer__language-item">日本語</span>
                        <span className="footer__language-item">Polski</span>
                        <span className="footer__language-item">Português</span>
                        <span className="footer__language-item">Русский</span>
                        <span className="footer__language-item">Svenska</span>
                        <span className="footer__language-item">Türkçe</span>
                        <span className="footer__language-item">简体中文</span>
                    </div>
                    <div className="footer__copyright">
                        © 2025 Last.fm Ltd. All rights reserved.
                        <a href="#" className="footer__link">
                            Terms of Use
                        </a>{" "}
                        |
                        <a href="#" className="footer__link">
                            Privacy Policy
                        </a>
                    </div>
                </div>
            </div>


        </footer>
    );
};

export default Footer;
