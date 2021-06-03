import React, { useState, useEffect } from "react";
import JoblyApi from './Api';
import JobCardList from './JobCardList';
import SearchForm from './SearchForm';
import DisplayError from "./DisplayError";

/**
 * /jobs
 * Routes ---> JobList
 * props: none
 * 
 * fn: handleSave function-- sets searchTerm after submit.
 * 
 * state: jobs --- an array of jobs. used to render JobCard.  
 "jobs": [
    {
      "id": 200,
      "title": "Accommodation manager",
      "salary": 126000,
      "equity": null,
      "companyHandle": "mejia-scott-ryan",
      "companyName": "Mejia, Scott and Ryan"
    }, .....
  ]
 *  state : searchTerm : string submitted from search form.
    state: errorMessages ---- array of errors to display if axios requests fails
 *  
 * 
 * Renders Seach form and a list of job cards.
 * */
function JobList() {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMessages, setErrorMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //**Fetch a list of all jobs on first render*/
  useEffect(function fetchJobList() {
    async function fetchJobs() {
      try {
        const jobsRes = await JoblyApi.getJobs();
        setJobs(jobsRes);
      } catch (err) {
        setErrorMessages(err);
      }
    }
    fetchJobs();
  }, [])


  //**Fetch a list of searched jobs when search term state changes*/
  useEffect(function fetchJobBySearch() {
    async function searchJobs() {
      try {
        const searchRes = await JoblyApi.getJobs(searchTerm)
        setJobs(searchRes);
      } catch (err) {
        setErrorMessages(err);
      }finally {
        setIsLoading(false);
      }
    }
    searchJobs();
  }, [searchTerm]);

  //** sets searchTerm after submit. 
  function handleSave(formData) {
    // setSearchTerm(formData.searchForm);
    setSearchTerm(formData);
  }

  if (isLoading) {
    return (
      <div>
        <i className="fas fa-spinner fa-pulse"></i>
        <h2>Loading...</h2>
      </div>
    )
  }
  return (
    <div className='CompanyList'>
      <div>
        <SearchForm handleSave={handleSave} searchTerm={searchTerm}/>
      </div>
      {errorMessages.length !== 0
        ? <DisplayError errors={errorMessages} />
        : <div><JobCardList jobs={jobs} /></div>}
    </div>
  );
};

export default JobList;