import React from 'react';

function BrandsSection() {
    return (
        <section className="brands-sec" id="act">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="brand-title mb-5">
                            <h5 className="h5-title">Our activities</h5>
                        </div>
                        <div className="brands-row">
                            <div className="brands-box">
                                <img src="assets/images/brands/b1.png" alt="" />
                            </div>
                            <div className="brands-box">
                                <img src="assets/images/brands/b2.png" alt="" />
                            </div>
                            <div className="brands-box">
                                <img src="assets/images/brands/b3.png" alt="" />
                            </div>
                            <div className="brands-box">
                                <img src="assets/images/brands/b4.png" alt="" />
                            </div>
                            <div className="brands-box">
                                <img src="assets/images/brands/b5.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BrandsSection;
