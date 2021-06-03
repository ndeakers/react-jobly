import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from './Api';
import JobCardList from "./JobCardList";
import DisplayError from "./DisplayError";

/**
 * /companies:handle
 * Routes ---> CompanyDetail
 * props: none
 * 
 * useParams--- gets the handle
 * state: companyjobs--- an array of jobs   
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
    state: errorMessages ---- displays an array errors if axios requests fails
*   Renders jobCardList component.
*/

function CompanyDetail() {
  const { handle } = useParams();
  const [companyJobs, setCompanyJobs] = useState([]); // store whole company in state
  const [errorMessages, setErrorMessages] = useState([]);

  /** makes API request to get jobs for a company */
  useEffect(function fetchCompanyJobList() {
    async function fetchJobs() {
      let jobs;
      try {
        const jobsRes = await JoblyApi.getCompany(handle);
        console.log('jobsres', jobsRes)
        jobs = jobsRes.jobs;
        console.log('jobs', jobs)
        setCompanyJobs(jobs);
      } catch (err) {
        setErrorMessages(err);
      }
    }
    fetchJobs();
  }, [handle]);

  // TODO add name and header for individual company
  return (<div className="CompanyDetail">
    {errorMessages.length !== 0
      ? <DisplayError errors={errorMessages} />
      : <JobCardList jobs={companyJobs} />}
  </div>)
}

export default CompanyDetail;