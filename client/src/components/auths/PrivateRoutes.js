import React, {useEffect} from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = ({ authState }) => {
    return {authState}
}

const PrivateRoutes = (props) => 
    {    
        if(props.authState.isLoading) {
            return <h2>Loading...</h2>
        }
        else if(!props.authState.isAuthenticated) {
            return <Navigate to="/login" />
        }
        else {
            return props.element
        }
    }

export default connect(mapStateToProps)(PrivateRoutes);