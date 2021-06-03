import React, { useState, useEffect } from "react";
import JoblyApi from './Api';
import CompanyCard from './CompanyCard';
import SearchForm from './SearchForm';
import DisplayError from "./DisplayError";

/**
 * /companies
 * Routes ---> CompanyList ---> SearchForm, CompanyCard
 * props: none
 * 
 * fn: handleSave function-- sets searchTerm after submit.
 * 
 * state: companies--- an array of companies. used to render CompanyCard.  
 * Example: [{
      "handle": "anderson-arias-morrow",
      "name": "Anderson, Arias and Morrow",
      "description": "Somebody program how I...",
      "numEmployees": 245,
      "logoUrl": "/logos/logo3.png"
    },.....]
 *  state : searchTerm : string submitted from search form.
    state: errorMessages ---- an array of errors to display if axios requests fails
 *  
 * Renders Seach form and a list of company cards.
 * */

function CompanyList() {
  const [companies, setCompanies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMessages, setErrorMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //**Fetch a list of searched companies when search term state changes*/
  useEffect(function fetchCompaniesBySearch() {
    async function searchCompanies() {
      try {
        const searchRes = await JoblyApi.getCompanies(searchTerm)
        setCompanies(searchRes);
      } catch (err) {
        setErrorMessages(err);
      }finally{
        setIsLoading(false);
      }
    }
    searchCompanies();
  }, [searchTerm])


  //** sets searchTerm after submit.
  function handleSave(searchData) {
    setSearchTerm(searchData);
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
        : <div> {companies.map(comp => (<div key={comp.handle}> <CompanyCard company={comp} /></div>))}
        </div>}
    </div >)
};

export default CompanyList;