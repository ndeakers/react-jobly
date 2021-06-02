import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from './api';
import JobCardList from "./JobCardList";

/**
 * /companies:handle
 * Routes ---> CompanyList ---> JobCardList ---> JobCard
 * props: TODO ?
 * 
 * useParams--- get the companyhandle
 * state: comanyjobs--- an array of jobs
 *  
 * */

function CompanyDetail() {
  const { handle } = useParams();
  const [companyJobs, setCompanyJobs] = useState([]);
  console.log('CompanyDetail companyJobs --->', companyJobs);


  useEffect(function fetchCompanyJobList() {
    async function fetchJobs() {
      const jobsRes = await JoblyApi.getCompany(handle);
      const jobs = jobsRes.jobs;
      console.log('jobsRes--->>', jobs);
      setCompanyJobs(jobs);
    }
    fetchJobs();
  }, [])


  return (<div className="CompanyDetail">
    <JobCardList jobs={companyJobs} />
  </div>)
}

export default CompanyDetail;