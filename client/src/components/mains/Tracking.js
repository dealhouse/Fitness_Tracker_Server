import React, {useState, useEffect}from 'react'
import { connect } from 'react-redux'
import { PullTracks, RemoveTracks, EditTrack } from '../../actions/TrackingAction';

const mapStateToProps = ({ trackingState }) => {
    return {trackingState}
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTracks: () => dispatch(PullTracks()),
        removeTrack: (id) => dispatch(RemoveTracks(id)),
        updateTrack: (id, data) => dispatch(EditTracks(id, data))
    }
}
const Tracking = (props) => {
    useEffect(() => {
        props.fetchTracks()
    }, [clicked])
    const [clicked, setClicked] = useState(0)
    const [updating, setUpdating] = useState()
    const [formValues, setFormValues] = useState({
        weight: '',
        arms: '',
        waist: '',
        hips: '',
        thighs: ''
    })
    return (
        <div>
            <h2>Measurement Tracking</h2>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>Weight</th>
                        <th>Arms</th>
                        <th>Waist</th>
                        <th>Hips</th>
                        <th>Thighs</th>
                        <th />
                        <th />
                    </tr>
                </thead>
                <tbody>
                    {props.trackingState.tracking.map((track) => (
                        <tr key={track.id}>
                            <td>{track.weight}</td>
                            <td>{track.arms}</td>
                            <td>{track.waist}</td>
                            <td>{track.hips}</td>
                            <td>{track.thighs}</td>
                            {/* <td><button onClick={(e) => handleClickEd(e, plan)} className='btn btn-primary btn sm'>Edit</button></td>
                            <td><button onClick={(e) => handleClickDel(e, plan.id)} className='btn btn-danger btn sm'>Delete</button></td> */}
                        </tr> ))}
                        </tbody>
                        </table>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Tracking);