import Neurology from "./images/neurology.png"
import Eye_care from "./images/eye-care.png"
import Cardiac_care from "./images/cardiac.png"
import Heart_care from "./images/heart.png"
import Osteoporosis from "./images/osteoporosis.png"
import ENT from "./images/ent.png"
import './App.css';
const OurDepartment = () => {
    return (
        <>
            <section className="py-5" id="departments">

                <div className="container">
                    <div className="row">
                        <div className="col-12 py-3" id="Ourdep">
                            <div className="bg-holder bg-size"  >
                            </div>
                            <h1 className="text-center">OUR DEPARTMENTS</h1>
                        </div>
                    </div>
                </div>
                


            </section>

            <section className="py-0">
                <div className="container">
                    <div className="row py-5 align-items-center justify-content-center justify-content-lg-evenly">
                        <div className="col-auto col-md-4 col-lg-auto text-xl-start">
                            <div className="d-flex flex-column align-items-center">
                                <div className="icon-box text-center"><a className="text-decoration-none" href="#!"><img className="mb-3 deparment-icon-hover" src={Neurology} alt="..." />
                                    <p>Neurology</p>
                                </a></div>
                            </div>
                        </div>
                        <div className="col-auto col-md-4 col-lg-auto text-xl-start">
                            <div className="d-flex flex-column align-items-center">
                                <div className="icon-box text-center"><a className="text-decoration-none" href="#!"><img className="mb-3 deparment-icon-hover" src={Eye_care} alt="..." />
                                    <p>Eye care</p>
                                </a></div>
                            </div>
                        </div>
                        <div className="col-auto col-md-4 col-lg-auto text-xl-start">
                            <div className="d-flex flex-column align-items-center">
                                <div className="icon-box text-center"><a className="text-decoration-none" href="#!"><img className="mb-3 deparment-icon-hover" src={Cardiac_care} alt="..." />
                                    <p>Cardiac care</p>
                                </a></div>
                            </div>
                        </div>
                        <div className="col-auto col-md-4 col-lg-auto text-xl-start">
                            <div className="d-flex flex-column align-items-center">
                                <div className="icon-box text-center"><a className="text-decoration-none" href="#!"><img className="mb-3 deparment-icon-hover" src={Heart_care} alt="..." />
                                    <p>Heart care</p>
                                </a></div>
                            </div>
                        </div>
                        <div className="col-auto col-md-4 col-lg-auto text-xl-start">
                            <div className="d-flex flex-column align-items-center">
                                <div className="icon-box text-center"><a className="text-decoration-none" href="#!"><img className="mb-3 deparment-icon-hover" src={Osteoporosis} alt="..." />
                                    <p>Osteoporosis</p>
                                </a></div>
                            </div>
                        </div>
                        <div className="col-auto col-md-4 col-lg-auto text-xl-start">
                            <div className="d-flex flex-column align-items-center">
                                <div className="icon-box text-center"><a className="text-decoration-none" href="#!"><img className="mb-3 deparment-icon-hover" src={ENT} alt="..." />
                                    <p>ENT</p>
                                </a></div>
                            </div>
                        </div>
                    </div>
                </div>


            </section>
        </>
    )
}
export default OurDepartment;