import React from "react";
import JobCard from "./JobCard";
function JobCardList({ jobs }) {


  return (
    <div className='CompanyList'>
      {jobs.map(job => (<div key={job.id}> <JobCard job={job} /> </div>))}
    </div>)
}

export default JobCardList;