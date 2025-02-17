export const Home = () => {
    return(
        <>
            <main>
                <section className="section-hero">
                    <div className="container grid grid-two-cols">
                        <div className="hero-content">
                            <p>We are the World Best IT Company</p>
                            <h1>Welcome to Arpit Technical</h1>
                            <p>
                                Are you ready to take your business to the next level with cutting-edge IT soluitons? Look no furhter! At Arpit Technical, we specially in providing innovative IT services and solutions tailored to meet your unique needs. 
                            </p>
                            <div className="btn btn-group">
                                <a href="/contact">
                                    <button className="btn">connect now</button>
                                </a>
                                <a href="/services">
                                    <button className="btn secondary-btn">learn more</button>
                                </a>
                            </div>
                        </div>
                        <div className="hero-image">
                            <img 
                            src="/image/my_pic.jpg" 
                            alt="coding together" 
                            width="400"
                            height="500"
                            />
                        </div>
                    </div>
                </section>
            </main>

            <section className="section-analytics">
                <div className="container grid grid-four-cols">
                    <div className="div1">
                        <h2>50+</h2>
                        <p>registered companies</p>
                    </div>
                    <div className="div1">
                        <h2>100,00+</h2>
                        <p>Happy Clients</p>
                    </div>
                    <div className="div1">
                        <h2>500+</h2>
                        <p>Well known Developers</p>
                    </div>
                    <div className="div1">
                        <h2>24/7</h2>
                        <p>services</p>
                    </div>
                </div>
            </section>

            {/* 3rd section */}
            <section className="section-hero">
                <div className="container grid grid-two-cols">
                    <div className="hero-image">
                        <img 
                        src="/image/my_pic.jpg" 
                        alt="coding together" 
                        width="400"
                        height="500"
                        />
                    </div>
                    <div className="hero-content">
                        <p>We are here to help you</p>
                        <h1>Welcome to Arpit Technical</h1>
                        <p>
                            Are you ready to take your business to the next level with cutting-edge IT soluitons? Look no furhter! At Arpit Technical, we specially in providing innovative IT services and solutions tailored to meet your unique needs. 
                        </p>
                        <div className="btn btn-group">
                            <a href="/contact">
                                <button className="btn">connect now</button>
                            </a>
                            <a href="/services">
                                <button className="btn secondary-btn">learn more</button>
                            </a>
                        </div>
                    </div>
                    
                </div>
            </section>
        </>
    );
};