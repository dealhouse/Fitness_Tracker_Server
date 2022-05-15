import React, {useState} from 'react'
import { AddTrack } from '../../actions/TrackingAction'
import { connect } from 'react-redux'

const mapDispatchToProps = (dispatch) => {
    return {
        makeTrack: (data) => dispatch(AddTrack(data)),
        
    }
}

const TrackingForm = (props) => {
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
    const handleSubmit = (e) => {
        e.preventDefault()
        props.makeTrack(formValues)
        setFormValues(
            {
                weight: '',
                arms: '',
                waist: '',
                hips: '',
                thighs: ''
            })
    }

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
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
                      
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary">
                            Submit
                            </button>
                        </div>
                        </form>
                            </div>
                       
    );
}

export default connect(null, mapDispatchToProps)(TrackingForm);