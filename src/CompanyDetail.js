import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from './api';
import JobCardList from "./JobCardList";

/**
 * /companies:handle
 * Routes ---> CompanDetail
 * props: none
 * 
 * useParams--- get the companyhandle
 * state: comanyjobs--- an array of jobs   
 * Example:[
 *   "job": {
    "id": 200,
    "title": "Accommodation manager",
    "salary": 126000,
    "equity": null,
    "company": {
      "handle": "mejia-scott-ryan",
      "name": "Mejia, Scott and Ryan",
      "description": "General traditional late situation discussion dog. Before best up strategy about direction.",
      "numEmployees": null,
      "logoUrl": "/logos/logo4.png"
    }, ....]

* Renders jobCardList component.
*/

function CompanyDetail() {
  const { handle } = useParams();
  const [companyJobs, setCompanyJobs] = useState([]);
  // console.log('CompanyDetail companyJobs --->', companyJobs);

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