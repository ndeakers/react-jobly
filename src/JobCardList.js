import React from "react";
import JobCard from "./JobCard";


/**
 * /Jobs
 * Routes ---> CompanyDetails ---> jobCardList
 *        ----> jobList ---> jobCardList
 * props: jobs
 * Example:
 *  "jobs": [
    {
      "id": 200,
      "title": "Accommodation manager",
      "salary": 126000,
      "equity": null,
      "companyHandle": "mejia-scott-ryan",
      "companyName": "Mejia, Scott and Ryan"
    }, .....
  ]
 * 
 * state:nonse 
 * Renders list of job cards components.
 * */


function JobCardList({ jobs }) {
  return (
    <div className='CompanyList'>
      {jobs.map(job => (<div key={job.id}> <JobCard job={job} /> </div>))}
    </div>)
}

export default JobCardList;