import { useForm } from '@formspree/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Appointment = () => {
    const Navigate = useNavigate()
    const [state, handleSubmit] = useForm("xovaqoyo");

    if (state.succeeded) {
        toast.success("Appointment Booked")
        return Navigate("/appointmentMail");
        
    }

    return (
        <>
            {/* <!-- <section> begin ============================--> */}
            <section className="py-5">

                <div className="container">
                    <div className="row">
                        <div className="col-12 py-3" id="people">
                            <div className="bg-holder bg-size">
                            </div>
                            {/* <!--/.bg-holder--> */}

                            <h1 className="text-center">APPOINTMENT</h1>
                        </div>
                    </div>
                </div>
                {/* <!-- end of .container--> */}

            </section>

            {/* <!-- Appointment Start --> */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <p className="d-inline-block border rounded-pill py-1 px-4">Appointment</p>
                            <h1 className="mb-4">Make An Appointment To Visit Our Doctor</h1>
                            <p className="mb-4">Sometimes there is a sad time at a noisy place. Painful is the pain itself. The pain is something and tears are the same. It was a noisy place and it is still noisy, but still, it's a noisy place. Just two great sorrows were right to be there</p>
                            <div className="bg-light rounded d-flex align-items-center p-5 mb-4">
                                <div className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-white" style={{ width: "55px", height: "55px" }}>
                                </div>
                            </div>
                            <div className="bg-light rounded d-flex align-items-center p-5">
                                <div className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-white" style={{ width: "55px", height: "55px" }}>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s" id="change">
                            <div className="bg-light rounded h-100 d-flex align-items-center p-5">
                                <form onSubmit={handleSubmit}>
                                    <div className="row g-3">
                                        <div className="col-12 col-sm-6">
                                            <input type="text" name="from_name" className="form-control border-0" placeholder="Your Name" style={{ height: "55px" }} />
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <input type="email" className="form-control border-0" placeholder="Your Email" name="from_email" style={{ height: "55px" }} error={state.errors} />
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <input type="text" className="form-control border-0" placeholder="Your Mobile" name="phone" style={{ height: "55px" }} error={state.errors} />
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <select className="form-select border-0" style={{ height: "55px" }} name="doctor">
                                                <option selected>Choose Doctor</option>
                                                <option value="1">Neurology</option>
                                                <option value="2">Eye care</option>
                                                <option value="3">Cardiac care</option>
                                                <option value="3">Heart care</option>
                                                <option value="3">Osteoporosis</option>
                                                <option value="3">ENT</option>
                                            </select>
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <div className="date" id="date" data-target-input="nearest">
                                                <input type="text"
                                                    className="form-control border-0 datetimepicker-input"
                                                    placeholder="Choose Date" data-target="#date" data-toggle="datetimepicker" style={{ height: "55px" }} />
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <div className="time" id="time" data-target-input="nearest">
                                                <input type="text"
                                                    className="form-control border-0 datetimepicker-input"
                                                    placeholder="Choose Date" data-target="#time" data-toggle="datetimepicker" style={{ height: "55px" }} error={state.errors} />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <textarea className="form-control border-0" rows="5" placeholder="Describe your problem" name="message" ></textarea>
                                        </div>

                                        <div className="col-12">
                                            <button className="btn btn-primary w-100 py-3" type="submit" >Book Appointment</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Appointment End --> */}
        </>
    )
}
export default Appointment;