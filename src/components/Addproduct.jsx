import React from 'react'
import Pronav from './Pronav'

const Addproduct = () => {
    return (
        <div>
<Pronav/>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">


                        <div className="row g-3">


                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" className="form-control" />

                            </div>

                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="warrenty" className="form-label">Warrenty</label>
                                <input type="text" className="form-control" />
                            </div>


                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Description</label>
                                <input type="textarea" className="form-control" />
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="mfddate" className="form-label">Manufacturing date</label>
                                <input type="date" className="form-control" />
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="expdate" className="form-label">Expiry date</label>
                                <input type="date" className="form-control" />
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="price" className="form-label">price</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="photo" className="form-label">Photo</label>
                                <input type="file" className="form-control" />
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="Custno" className="form-label">Customer Care Number</label>
                                <input type="number" className="form-control" />
                            </div>
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">


                                <button className="btn btn-success">Submit</button>
                            </div>
                        </div>

                    </div>

                </div>
            </div>




        </div>
    )
}

export default Addproduct