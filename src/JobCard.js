import React from "react";

function JobCard({ job }) {

  return (
    <div className="card JobCard">
      <h5 className="card-header">{job.title}</h5>
      <div className="card-body">
        <p className="card-text">{job.salary}</p>
        <p className="card-text">{job.equity}</p>
        <button className="btn btn-primary">Apply</button>
      </div>
    </div>
  )
}

export default JobCard;