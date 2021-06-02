import React, { useState, useEffect } from "react";
import JoblyApi from './api';
import CompanyCard from './CompanyCard';
import SearchForm from './SearchForm';


/**
 * /companies
 * Routes ---> CompanyList ---> SearchForm, CompanyCard
 * props: none
 * 
 * fn: handleSave function-- sets searchTerm after submit.
 * 
 * state: companies--- an array of companies. used to render CompanyCard.  
 * Example [{
      "handle": "anderson-arias-morrow",
      "name": "Anderson, Arias and Morrow",
      "description": "Somebody program how I...",
      "numEmployees": 245,
      "logoUrl": "/logos/logo3.png"
    },.....]
 *  state : searchTerm : string submitted from search form.
 *  
 * 
 * Renders Seach form and a list of company cards.
 * */

function CompanyList() {
  const [companies, setCompanies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");


  //**Fetch a list of all companies on first render*/
  useEffect(function fetchCompanyList() {
    async function fetchCompanies() {
      const companiesRes = await JoblyApi.getCompanies();
      // console.log('companiesRes--->>', companiesRes)
      setCompanies(companiesRes);
    }
    fetchCompanies();
  }, [])


  //**Fetch a list of searched companies when search term state changes*/
  useEffect(function fetchCompaniesBySearch() {
    async function searchCompanies() {
      // const searchRes = await JoblyApi.getCompaniesBySearchTerm(searchTerm)
      const searchRes = await JoblyApi.getCompanies(searchTerm)
      setCompanies(searchRes);
    }
    searchCompanies();
  }, [searchTerm])



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
      {companies.map(comp => (<div key={comp.handle}> <CompanyCard company={comp} /> </div>))}
    </div>)
};

export default CompanyList;