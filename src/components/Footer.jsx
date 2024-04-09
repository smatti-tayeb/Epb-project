import React from 'react';

function Footer() {
    return (
        <footer className="site-footer" id="contact">
            <div className="top-footer section">
                <div className="sec-wp">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="footer-info">
                                    <div className="footer-logo">
                                        <a href="index.html">
                                            <img src="../../public/assets/images/Logo-epb.png" alt="" width="100" height="50" />
                                        </a>
                                    </div>
                                    <p>De par sa position stratégique, les qualités nautiques remarquables et les infrastructures performantes dont il dispose, le port de Bejaïa reste un moteur de développement économique pour la région et le pays. Principale plaque tournante du commerce, il constitue l’accès privilégié aux différentes industries, parce qu’il offre à ses clients des terminaux propices et compétitifs ainsi que des équipements modernes et performants, tous dédiés pour l’accueil et le traitement de tous types de marchandises</p>
                                    <div className="social-icon">
                                        <ul>
                                            <li><a href="#"><i className="uil uil-facebook-f"></i></a></li>
                                            <li><a href="#"><i className="uil uil-instagram"></i></a></li>
                                            <li><a href="#"><i className="uil uil-github-alt"></i></a></li>
                                            <li><a href="#"><i className="uil uil-youtube"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="footer-flex-box">
                                    <div className="footer-table-info">
                                        <h3 className="h3-title">open hours</h3>
                                        <ul>
                                            <li><i className="uil uil-clock"></i> Mon-Thurs : 9am - 22pm</li>
                                            <li><i className="uil uil-clock"></i> Fri-Sun : 11am - 22pm</li>
                                        </ul>
                                    </div>
                                    <div className="footer-menu food-nav-menu">
                                        <h3 className="h3-title">Links</h3>
                                        <ul className="column-2">
                                            <li><a href="#home" className="footer-active-menu">Home</a></li>
                                            <li><a href="#about">About</a></li>
                                            <li><a href="#act">Our activities</a></li>
                                            <li><a href="#gallery">Calls of tanderens</a></li>
                                            <li><a href="#contact">Contact</a></li>
                                        </ul>
                                    </div>
                                    <div className="footer-menu">
                                        <h3 className="h3-title">Company</h3>
                                        <ul>
                                            <li><a href="#">Terms & Conditions</a></li>
                                            <li><a href="#">Privacy Policy</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="copyright-text">
                                <p>Copyright &copy; 2024 <span className="name">EtudCoder.</span>All Rights Reserved.</p>
                            </div>
                        </div>
                    </div>
                    <button className="scrolltop"><i className="uil uil-angle-up"></i></button>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
