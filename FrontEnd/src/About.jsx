import aboutimg from "./images/about.jpg"
const About = () => {
    return (
        <>
      <section className="page-title bg-1">
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="block text-center">
                <span className="text-white">About Us</span>
                <h1 className="text-capitalize mb-5 text-lg">About Us</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
      <section className="section about-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <h2 className="title-color">Personal care for your healthy living</h2>
            </div>
            <div className="col-lg-8">
              <p style={{ fontWeight: "900", fontSize: "21px" }}>अच्छे स्वास्थ्य का ध्यान रखना सिर्फ एक अच्छे शारीरिक स्थिति और रूप के बारे में नहीं है। यह आत्म-संतोष, आंतरिक शांति, और आपके व्यवहार के बारे में है। आज की प्रतिस्पर्धात्मक युग में, एक स्वस्थ मन और शरीर का ध्यान रखना इतना आसान नहीं है; लेकिन यदि आप इसे जवानी की उम्र से ही एक आदत बना लें, तो आप पूरे जीवन में स्वस्थ और फिट रहेंगे।</p>
            </div>
          </div>
        </div>
      </section>

      <div className="container-fluid py-5">
        <div className="container">
          <div className="row gx-5">
            <div className="col-lg-5 mb-5 mb-lg-0" style={{ minHeight: "500px" }}>
              <div className="position-relative h-100" data-aos="zoom-in-up">
                <img className="position-absolute w-100 h-100 rounded" src={aboutimg} style={{ objectFit: "cover" }} />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="mb-4">
                <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">About Us</h5>
                <h1 className="display-4" style={{fontWeight:"bolder"}}>Best Medical Care For Yourself and Your Family</h1>
              </div>
              <p>He was an emperor, and rebus at at clita was also distinguished. The pain is both painful and temporary, sitting voluptuously. Some diamonds are diamonds and they labor for themselves. The clitoris is both itself and sitting among the lorem, but it is not sitting on its own. The holy clitoris is just and temporary, the takimata is ermod, the pain is takimata, it is not sitting in great pain. He was and is great</p>
              <div className="row g-3 pt-3">
                <div className="col-sm-3 col-6">
                  <div className="bg-light text-center rounded-circle py-4"  data-aos="zoom-in-up">
                    <i className="fa fa-3x fa-user-md text-primary mb-3"></i>
                    <h6 className="mb-0">Qualified<small className="d-block text-primary">Doctors</small></h6>
                  </div>
                </div>
                <div className="col-sm-3 col-6"  data-aos="zoom-in-up">
                  <div className="bg-light text-center rounded-circle py-4">
                    <i className="fa fa-3x fa-procedures text-primary mb-3"></i>
                    <h6 className="mb-0">Emergency<small className="d-block text-primary">Services</small></h6>
                  </div>
                </div>
                <div className="col-sm-3 col-6"  data-aos="zoom-in-up">
                  <div className="bg-light text-center rounded-circle py-4">
                    <i className="fa fa-3x fa-microscope text-primary mb-3"></i>
                    <h6 className="mb-0">Accurate<small className="d-block text-primary">Testing</small></h6>
                  </div>
                </div>
                <div className="col-sm-3 col-6"  data-aos="zoom-in-up">
                  <div className="bg-light text-center rounded-circle py-4">
                    <i className="fa fa-3x fa-ambulance text-primary mb-3"></i>
                    <h6 className="mb-0">Free<small className="d-block text-primary">Ambulance</small></h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}
export default About;