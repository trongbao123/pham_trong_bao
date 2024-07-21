import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import {
    FacebookOutlined,
    TwitterOutlined,
    InstagramOutlined,
    LinkedinOutlined,
    HomeOutlined,
    PhoneOutlined,
    MailOutlined,
    IeOutlined,
    FieldTimeOutlined
} from '@ant-design/icons';
import RightIcon from '../../assets/icons/RightIcon';
export default function Footer() {
    return (
        <footer className="footer-style1 bg-light">
            <div className="container">
                <div className="row-footer-bot">
                    <div>
                        <Link to="index.html" className="footer-logo">
                            <img src="https://crypto.websitelayout.net/img/logos/footer-light-logo.png" alt="..." />
                        </Link>
                        <p className="mb-4">Cryptocurrencies do not have a important issuing or regulating authority, rather the usage of a decentralized gadget to report transactions and problem new units.</p>
                        <ul className="social-icon-style1">
                            <li>
                                <Link to="#!"><FacebookOutlined /></Link>
                            </li>
                            <li>
                                <Link to="#!"><TwitterOutlined /></Link>
                            </li>
                            <li>
                                <Link to="#!"><InstagramOutlined /></Link>
                            </li>
                            <li>
                                <Link to="#!"><LinkedinOutlined /></Link>
                            </li>
                        </ul>
                    </div>
                    <div >
                        <h3 className="h5 mb-4">About Us</h3>
                        <ul className="footer-list-style1">
                            <li>
                                <RightIcon />
                                <Link to="about.html">About</Link>
                            </li>
                            <li>
                                <RightIcon />
                                <Link to="roadmap.html">Roadmap</Link>
                            </li>
                            <li>
                                <RightIcon />
                                <Link to="our-team.html">Our Team</Link>
                            </li>
                            <li>
                                <RightIcon />
                                <Link to="our-pricing.html">Pricing</Link>
                            </li>
                            <li>
                                <RightIcon />
                                <Link to="contact.html">Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="h5 mb-4">Services</h3>
                        <ul className="footer-list-style1">
                            <li>
                                <RightIcon />
                                <Link to="bitcoin-exchange.html">Bitcoin Exchange</Link>
                            </li>
                            <li>
                                <RightIcon />
                                <Link to="bitcoin-atm-kiosks.html">BitCoin ATM’s &amp; Kiosks</Link>
                            </li>
                            <li>
                                <RightIcon />
                                <Link to="payment-integration.html">Payment Integration</Link>
                            </li>
                            <li>
                                <RightIcon />
                                <Link to="research-and-development.html">Research &amp; Development</Link>
                            </li>
                            <li>
                                <RightIcon />
                                <Link to="secure-wallet.html">Secure Wallet</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="h5 mb-4">Contact Us</h3>
                        <ul className="contact-list">
                            <li className="d-flex align-items-baseline">
                                <span className="ti-home " />
                                <HomeOutlined style={{ marginRight: '10px' }} />
                                66 Guild Street 512B.

                            </li>
                            <li className="d-flex align-items-baseline">
                                <span className="ti-mobile " />
                                <PhoneOutlined />
                                <Link to="#!">(+44) 123 456 789</Link>
                            </li>
                            <li className="d-flex align-items-baseline">
                                <span className="ti-email " />
                                <MailOutlined />
                                <Link to="#!">info@example.com</Link>
                            </li>
                            <li className="d-flex align-items-baseline">
                                <span className="ti-world " />
                                <IeOutlined />
                                <Link to="#!">www.example.com</Link>
                            </li>
                            <li className="d-flex align-items-baseline">
                                <span className="ti-time " />
                                <FieldTimeOutlined />
                                <Link to="#!">Mon - Sat : 10am - 6pm</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container-pow">
                <div className="powered">
                    <p className="mb-0">© <span className="current-year">2024</span> Crypto is Powered by
                        <Link to="https://www.chitrakootweb.com/" target="_blank"
                            className="text-primary-hover font-weight-500">
                            Chitrakoot Web
                        </Link>
                    </p>
                </div>
            </div>
        </footer>

    )
}
