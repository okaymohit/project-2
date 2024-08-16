import Aboutus from "./Aboutus";
import Whyus from "./Whyus";
import Appointment from "./Appointment";
import BgNav from "./BgNav";
import OurDepartment from "./OurDepartment";

const Homepage = () => {
    return (
        <>
            <BgNav/>
            <OurDepartment />
            <Aboutus />
            <Whyus />
            <Appointment />
        </>
    )
}
export default Homepage;