import { NavLink } from "react-router-dom";
import about1 from "./images/about-1.jpg"
import about2 from "./images/about-2.jpg"
const Aboutus = ()=>{
    return(
        <>
       <div className="container-xxl py-5">
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                    <div className="d-flex flex-column" data-aos="zoom-in">
                        <img className="img-fluid rounded w-75 align-self-end" src={about1} alt="" />
                        <img className="img-fluid rounded w-50 bg-white pt-3 pe-3" src={about2} alt="" style={{marginTop:"-25%"}}/>
                    </div>
                </div>
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                    <p className="d-inline-block border rounded-pill py-1 px-4">About Us</p>
                    <h1 className="mb-4">Why You Should Trust Us? Get Know About Us!</h1>
                    <p>Sometimes the fleeting moment returns. Painful pain and suffering come. Although at times, the pain and suffering are eased. Fleeting moments return to where it all began, but the constant pain remains alongside the momentary joy</p>
                    <p className="mb-4">The pain and suffering do not stop, and it continues to exist. Joy can be found in small moments, but the pain and suffering are always present. Despite the work and efforts, the pain and suffering return, and they coexist with moments of sanctity and pain.</p>
                    <p><i className="far fa-check-circle text-primary me-3"></i>Quality health care</p>
                    <p><i className="far fa-check-circle text-primary me-3"></i>Only Qualified Doctors</p>
                    <p><i className="far fa-check-circle text-primary me-3"></i>Medical Research Professionals</p>
                    <NavLink className="btn btn-primary rounded-pill py-3 px-5 mt-3" to={"/about"}>Read More</NavLink>
                </div>
            </div>
        </div>
    </div>
        </>
    )
}
export default Aboutus;