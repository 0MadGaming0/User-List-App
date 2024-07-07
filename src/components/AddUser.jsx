import React from 'react'

const AddUser = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Name</label>
                        <input type="text" className="form-control" placeholder="Enter the name" />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Username</label>
                        <input type="text" className="form-control" placeholder="Enter the username" />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Email</label>
                        <input type="text" className="form-control" placeholder="Enter the email" />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Phone</label>
                        <input type="text" className="form-control" placeholder="Enter phone number" />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Website</label>
                        <input type="text" className="form-control" placeholder="Enter the website name" />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button className="btn btn-info">Submit</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AddUser
