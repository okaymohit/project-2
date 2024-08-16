import axios from "axios";
import { useEffect, useState } from "react";
import Medicine from "./Medicine";

const MedicineHandler = () => {
    const [med, setMed] = useState([])
    useEffect(() => {
        axios.get("http://localhost:8080/medicine")
            .then(res => setMed(res.data))
            .catch(err => console.log(err))
    })



    return (
        <>
            <form className="row domain-search bg-pblue">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <h2 className="form-title">Find Your <strong>Medicines</strong></h2>
                            <p>Search for your Medicine now</p>
                        </div>
                        <div className="col-md-9">
                            <div className="input-group">
                                <input type="search" className="form-control" placeholder="Search for your Medicine"/>
                                <span className="input-group-addon"><input type="submit" value="Search" className="btn btn-primary" /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </form>

            {
                med.map((d) => {
                    return <Medicine key={d.medicineId} medicineName={d.medicineName} description={d.description} suggestedDoctorName={d.suggestedDoctorName} image={d.imageURL} price={d.price} />
                })
            }

        </>
    )
}
export default MedicineHandler;