import { NavLink } from "react-router-dom";

const Medicine = ({ medicineName, description, suggestedDoctorName, image, price ,key }) => {
    return (
        <>
            <div className="container d-flex justify-content-center mt-50 mb-50">
                <div className="row">
                    <div className="col-md-10">
                        <div className="card card-body">
                            <div className="media align-items-center align-items-lg-start text-center text-lg-left flex-column flex-lg-row">
                                <div className="mr-2 mb-3 mb-lg-0">
                                    <img src={image} width="150" height="150" alt="" />
                                </div>
                                <div className="media-body">
                                    <h6 className="media-title font-weight-semibold">
                                        <NavLink  data-abc="true" to={`/singleProduct/${key}`}>{medicineName}</NavLink>
                                    </h6>
                                    <ul className="list-inline list-inline-dotted mb-3 mb-lg-2">
                                        <li className="list-inline-item" style={{ fontWeight: "bolder" }}>Suggest Doctor Name : <span style={{fontWeight:"normal"}}>{suggestedDoctorName}</span></li>
                                        <li className="list-inline-item" style={{ fontWeight: "bolder" }}>Medicine Description : <span style={{fontWeight:"normal"}}>{description}</span></li>
                                    </ul>
                                </div>
                                <div className="mt-3 mt-lg-0 ml-lg-3 text-center">
                                    <ul className="list-inline list-inline-dotted mb-3 mb-lg-2">
                                        <li className="list-inline-item" style={{ fontWeight: "bolder" }}>Price of Medicine : <span style={{fontWeight:"normal"}}>{price}</span></li>
                                    </ul>
                                    <div>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <div className="text-muted">1985 reviews</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Medicine;