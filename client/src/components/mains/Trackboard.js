import Tracking from "./Tracking";
import TrackingForm from "./TrackingForm";
import React from "react";

const Trackboard = () => {
    return (
        <div div className="col-md-10 m-auto">
            <div className='className="card card-body mt-5"'>
            <h2>New Measurement</h2>
            <TrackingForm />
            </div>
            <Tracking />
        </div>
    );
}

export default Trackboard;

