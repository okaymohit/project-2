import CardSliderData from "./CardSliderData";

const BgNav = () => {
    return (
        <>

            <div id="bgimg" >
                <div className="tagging">
                    <h1 style={{ fontWeight: 800, fontSize: "55px",textShadow:"2px 2px White"  }} >Health Care</h1>
                    <h4 style={{ fontSize: "59px",textShadow:"2px 2px White" }} >For Whole Family</h4>
                    <br />
                    <div className="phone cta">Call us</div>
                    <div className="phone number">(453) 416-4742</div>
                    <br />
                    <br />
                    <br />
                    <div className="phone cta">Mail us</div>
                    <div className="phone number">pharmafleet@</div>
                </div>
            </div>

            <CardSliderData/>
        </>
    )
}
export default BgNav;