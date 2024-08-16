import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import loginimg from "./images/loginPage.jpg"
import { faCapsules } from '@fortawesome/free-solid-svg-icons'
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

const Account = () => {
    const navigate = useNavigate();
    const [input, setInput] = useState({
        email: "",
        password: ""
    })
    const SignIn = (event) => {
        event.preventDefault();
        axios.post("http://localhost:8080/users/Login", input)
            .then((res)=>{

                console.log(res.data)

                if(res.data.status === true){
                    toast.success("Login SuccessFully")
                    localStorage.setItem('Status', true);
                    navigate('/')
                    window.location.reload();
                }

               else if(res.data.message === "Invalid username or password"){
                    toast.error("Invalid username or password")
                }

                else if(res.data.message === "Passeord not Matched"){
                    toast.warning("Check Your Password")
                }

                else if(res.data.message === "Email Not Exisit"){
                    toast.error("Email Not Exisit")
                }

            })
    }


    return (
        <>
            <section className="vh-100">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col col-xl-10">
                            <div className="card" style={{ borderRadius: "1rem" }}>
                                <div className="row g-0">
                                    <div className="col-md-6 col-lg-5 d-none d-md-block">
                                        <img src={loginimg}
                                            alt="login form" className="img-fluid" style={{ borderRadius: "1rem 0 0 1rem" }} />
                                    </div>
                                    <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                        <div className="card-body p-4 p-lg-5 text-black">
                                            <form onSubmit={SignIn}>
                                                <div className="d-flex align-items-center mb-3 pb-1">
                                                    <i style={{ color: "blue", fontSize: "2rem" }}><FontAwesomeIcon icon={faCapsules} /></i>
                                                    <span className="h1 fw-bold mb-0">  PharmaFleet</span>
                                                </div>

                                                <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px" }}>Sign into your account</h5>

                                                <div data-mdb-input-init className="form-outline mb-4">
                                                    <input type="email" onChange={(e) => setInput({ ...input, email: e.target.value })} value={input.email} className="form-control form-control-lg" autoComplete="current-password" />
                                                    <label className="form-label" for="form2Example17">Email address</label>
                                                </div>

                                                <div data-mdb-input-init className="form-outline mb-4">
                                                    <input type="password" onChange={(e) => setInput({ ...input, password: e.target.value })} value={input.password} className="form-control form-control-lg" autoComplete="current-password" />
                                                    <label className="form-label" for="form2Example27">Password</label>
                                                </div>

                                                <div className="pt-1 mb-4">
                                                    <button data-mdb-button-init data-mdb-ripple-init className="btn btn-dark btn-lg btn-block" type="submit" >Login</button>
                                                </div>

                                                <a className="small text-muted" href="#!">Forgot password?</a>
                                                <p className="mb-5 pb-lg-2" style={{ color: " #393f81" }}>Don't have an account? <NavLink to={"/registration"}
                                                    style={{ color: " #393f81" }}>Register here</NavLink></p>
                                                <a className="small text-muted">Terms of use.</a>
                                                <a className="small text-muted">Privacy policy</a>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Account;