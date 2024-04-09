import React from 'react';

function AboutSection() {
    return (
        <section className="about-sec section" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="sec-title text-center mb-5">
                            <p className="sec-sub-title mb-3">About Us</p>
                            <h2 className="h2-title">Discover our <span>company story</span></h2>
                            <div className="sec-title-shape mb-4">
                                <img src="../../public/assets/images/title-shape.svg" alt="" />
                            </div>
                            <p>En août 1982, le décret n°82-285 a établi l'Entreprise Portuaire de Béjaïa (EPB) en tant qu'entreprise socialiste à caractère économique, conformément à la charte de l'organisation des entreprises et à l'ordonnance n°71-74 sur la gestion socialiste des entreprises. L'EPB était régie par la législation en vigueur et était considérée comme commerçante dans ses relations avec les tiers.

                                Pour remplir ses missions, l'EPB a été désignée pour succéder à l'Office National des Ports (ONP), à la Société Nationale de Manutention (SO.NA.MA) et partiellement à la Compagnie Nationale Algérienne de Navigation (CNAN), et elle a hérité de leurs actifs, structures et personnels associés.
                                
                                En janvier 1988, conformément aux lois n°88.01, 88.03 et 88.04, qui visaient à accorder plus d'autonomie aux entreprises dans le cadre des réformes économiques, et aux décrets subséquents (n°88.101, n°88.199 et n°88.177), l'EPB a été transformée en Entreprise Publique Economique, Société par Actions (EPE-SPA) en février 1989, avec un capital social initial de 10 millions de dinars algériens, désormais porté à 3.5 milliards de dinars algériens.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8 m-auto">
                        <div className="about-video">
                            <div className="about-video-img" style={{backgroundImage: `url("../../public/assets/images/acceuil.jpg")`}}></div>
                            <div className="play-btn-wp">
                                <a href="assets/images/video.mp4" data-fancybox="video" className="play-btn">
                                    <i className="uil uil-play"></i>
                                </a>
                                <span>Watch the company film</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;
