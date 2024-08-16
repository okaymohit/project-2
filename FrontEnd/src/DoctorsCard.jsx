const DoctorsCard = ({ name, specialty, image }) => {
    return (
        <>
            <div className="container-xxl py-5" style={{ position: "relative", bottom: "2rem" }} >
                <div className="container " data-aos="zoom-in-up">
                    <div className="row g-5">
                        <div className="col-lg-10">
                            <div className="team-item position-relative rounded overflow-hidden">
                                <div className="bg-image hover-zoom">
                                    <img className="img-fluid" src={image} />
                                </div>
                                <br />
                                <div className="team-text bg-light text-center">
                                    <h5>{name}</h5>
                                    <p className="text-primary">{specialty}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DoctorsCard;


