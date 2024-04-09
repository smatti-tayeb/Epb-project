import React from 'react';

function MainBanner() {
    return (
        <section className="main-banner" id="home">
            <div className="js-parallax-scene">
                <div className="banner-shape-1 w-100" data-depth="0.30"></div>
                <div className="banner-shape-2 w-100" data-depth="0.25"></div>
            </div>
            <div className="sec-wp">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="banner-text">
                                <h1 className="h1-title">
                                    Welcome to <span>epb</span>
                                </h1>
                                <p>Welcome to the home page of the Béjaïa Port Company. Explore our portal to discover our commitment to port excellence and economic development in the region.</p>
                                <div className="banner-btn mt-4">
                                    <a href="#menu" className="sec-btn">Check our calls for tenders</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="banner-img-wp">
                                <div className="banner-img" style={{backgroundImage: `url("/assets/images/acceuil.jpg")`}}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MainBanner;
