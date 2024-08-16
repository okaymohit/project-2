import axios from "axios";
import { useEffect, useState } from "react";
import DoctorsCard from "./DoctorsCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const CardSliderData = () => {
    const [api, setapi] = useState([])
    useEffect(() => {
        axios.get("http://localhost:8080/doctors")
            .then(res => setapi(res.data))
    })

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (


        <>
            <div className="text-center mx-auto mb-5 wow fadeInUp" style={{ maxWidth: "600px" }}>
                <br />
                <br />
                <h1 className="text-center">Our Experience Doctors</h1>
            </div>
            <Carousel responsive={responsive} infinite={true} itemClass="carousel-item-padding-2-px" showDots={true}>
                {
                    api.map((data) => {
                        return <DoctorsCard key={data.id} name={data.name} specialty={data.specialty} image={data.image} />
                    })
                }
            </Carousel>

        </>

    )
}
export default CardSliderData;