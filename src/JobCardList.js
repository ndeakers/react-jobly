import React from "react";
import CompanyDetail from "./CompanyDetail";
import JobCard from "./JobCard";


/**
 * /Jobs
 * Routes ---> CompanyDetails ---> jobCardList
 *        ----> jobList ---> jobCardList
 * props: jobs: an array of jobs
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
 * state: none 
 * Renders list of job cards components.
 * */



function JobCardList({jobs}) { // TODO just pass what we need to JobCard

  console.log('jobsCardList--->>', jobs)
  return (
    <div className='JobCardList'>
      {jobs.map(job => (<div key={job.id}> <JobCard job={job} /> </div>))}
    </div>)
}

export default JobCardList;




