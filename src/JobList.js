import React, { useState, useEffect } from "react";
import JoblyApi from './api';
import JobCardList from './JobCardList';
import SearchForm from './SearchForm';

/**
 * /jobList
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
 *  
 * 
 * Renders Seach form and a list of job cards.
 * */
function JobList() {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  
  //**Fetch a list of all jobs on first render*/

  useEffect(function fetchJobList() {
    async function fetchJobs() {
      const jobsRes = await JoblyApi.getJobs();
      // console.log('jobsRes--->>', jobsRes)
      setJobs(jobsRes);
    }
    fetchJobs();
  }, [])


  //**Fetch a list of searched jobs when search term state changes*/

  useEffect(function fetchJobBySearch() {
    async function searchJobs() {
      const searchRes = await JoblyApi.getJobs(searchTerm)
      setJobs(searchRes);
    }
    searchJobs();
  }, [searchTerm]);

  //** sets searchTerm after submit. 
  function handleSave(formData) {
    // console.log("handleSave formData", formData)
    setSearchTerm(formData.searchForm);
  }

  return (
    <div className='CompanyList'>
      <div>
        <SearchForm handleSave={handleSave} />
      </div>
      <div>
            <JobCardList jobs={jobs}/> 
      </div>
    </div>
    );
};

export default JobList;