import { Analytics } from "../components/Analytics";
import { NavLink } from "react-router-dom";

export const About = () => {
  return <>
    <main>
        <section className="section-hero">
            <div className="container grid grid-two-cols">
                <div className="hero-content">
                    {/* <p>Welcome. Arpit Technical</p> */}
                    <h1>Why Choose Us?</h1>
                    <p>
                        Expertise: Our team consists of experienced IT professionals who are passionate about up-to-date with the latest industry trends. 
                    </p>
                    <p>
                        Expertise: Our team consists of experienced IT professionals who are passionate about up-to-date with the latest industry trends. 
                    </p>
                    <p>
                        Expertise: Our team consists of experienced IT professionals who are passionate about up-to-date with the latest industry trends. 
                    </p>
                    <p>
                        Expertise: Our team consists of experienced IT professionals who are passionate about up-to-date with the latest industry trends. 
                    </p>
                    <p>
                        Expertise: Our team consists of experienced IT professionals who are passionate about up-to-date with the latest industry trends. 
                    </p>
                    <div className="btn btn-group">
                        <NavLink to="/contact">
                            <button className="btn">connect now</button>
                        </NavLink>
                        <NavLink to="/service">
                            <button className="btn secondary-btn">learn more</button>
                        </NavLink>
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

    <Analytics/>
  </>;
};

