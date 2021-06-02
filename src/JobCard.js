import React from "react";

function JobCard({ job }) {

  return (
    <div className="card JobCard">
      <h5 className="card-header">Title: {job.title}</h5>
      <div className="card-body">
        <p className="card-text">Salaray: {job.salary}</p>
        <p className="card-text">Equity: {job.equity}</p>
        <button className="btn btn-primary">Apply</button>
      </div>
    </div>
  )
}

export default JobCard;