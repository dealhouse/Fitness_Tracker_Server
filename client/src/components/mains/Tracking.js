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
        updateTrack: (id, data) => dispatch(EditTrack(id, data))
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
    const handleChange = (e) => {
        setFormValues({...formValues, [e.target.name]: e.target.value})
    }
    const handleSubmit = (e, id) => {
        e.preventDefault()
        props.updateTrack(id, formValues)
        setFormValues(
            {
                weight: "",
                arms: "",
                waist: "",
                hips: "",
                thighs: ""
            })
        setUpdating()
        setClicked((prev) => prev + 1)
        console.log(clicked)
    }
    
    const handleClickEd = (e, track) => {
        e.preventDefault()
        setUpdating(track.id)
        setFormValues({
            weight: track.weight,
            arms: track.arms,
            waist: track.waist,
            hips: track.hips,
            thighs: track.thighs
        })

    }
    const handleClickDel = (e, id) => {
        e.preventDefault()
        props.removePlan(id)
    }
    return (
        <div>
            <h2>Measurement Tracking</h2>
            <form onSubmit={(e) => handleSubmit(e, updating)}>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>Date added</th>
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
                        updating !== track.id ? 
                        <tr key={track.id}>
                            <td>{track.date}</td>
                            <td>{track.weight}</td>
                            <td>{track.arms}</td>
                            <td>{track.waist}</td>
                            <td>{track.hips}</td>
                            <td>{track.thighs}</td>
                            <td><button onClick={(e) => handleClickEd(e, track)} className='btn btn-primary btn sm'>Edit</button></td>
                            <td><button onClick={(e) => handleClickDel(e, track.id)} className='btn btn-danger btn sm'>Delete</button></td>
                        </tr> :
                        <tr>
                            <td>
                        <div className="form-group">
                            <label>Weight</label>
                            <input
                            className="form-control"
                            type="number"
                            name="weight"
                            onChange={handleChange}
                            value={formValues.weight}
                            />
                        </div>
                        </td>
                        <td>
                            
                        <div className="form-group">
                            <label>Arms</label>
                            <input
                            className="form-control"
                            type="number"
                            name="arms"
                            onChange={handleChange}
                            value={formValues.arms}
                            />
                        </div>
                        </td>
                        <td>

                        <div className="form-group">
                            <label>Waist</label>
                            <input
                            className="form-control"
                            type="number"
                            name="waist"
                            onChange={handleChange}
                            value={formValues.waist}
                            />
                        </div>
                        </td>
                        <td>

                        <div className="form-group">
                            <label>Hips</label>
                            <input
                            className="form-control"
                            type="number"
                            name="hips"
                            onChange={handleChange}
                            value={formValues.hips}
                            />
                        </div>
                        </td>
                        <td>

                        <div className="form-group">
                            <label>Thighs</label>
                            <input
                            className="form-control"
                            type="number"
                            name="thighs"
                            onChange={handleChange}
                            value={formValues.thighs}
                            />
                        </div>
                        </td>
                        <td>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary">
                            Submit
                            </button>
                        </div>
                            </td>
                      </tr>
                        ))}
                        </tbody>
                        </table>
                        </form>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Tracking);