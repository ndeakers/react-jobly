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
  const [company, setCompany] = useState([]); 
  const [errorMessages, setErrorMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  /** makes API request to get jobs for a company */
  useEffect(function fetchCompanyJobList() {
    async function fetchCompanies() {

      try {
        const companyRes = await JoblyApi.getCompany(handle);
       setCompany(companyRes);
      } catch (err) {
        setErrorMessages(err);  
      } finally{
        setIsLoading(false)
      }
    }
    fetchCompanies();
  }, [handle]);
  
  if (isLoading) {
    console.log('isloadingtrue')
    return (
      <div>
        <i className="fas fa-spinner fa-pulse"></i>
        <h2>Loading...</h2>
      </div>
    )
  }

  return (<div className="CompanyDetail">
    {errorMessages.length !== 0
      ? <DisplayError errors={errorMessages} />
      : 
      <div>
        <h2>{company.handle}</h2>
        <p>{company.description}</p>
        <JobCardList jobs={company.jobs} />
      </div> }
  </div>
  )
}

export default CompanyDetail;

