import React, { useState, useEffect } from "react";
import JoblyApi from './api';
import CompanyCard from './CompanyCard';
import SearchForm from './SearchForm';


/**
 * /companies
 * Routes ---> CompanyList ---> CompanySearchForm, CompanyCard
 * props: TODO ?
 * 
 * fn: search function-- sets searchTerm
 * state: companies--- an array of companies. used to render CompanyCard.
 *        searchTerm.
 *  
 * */

function CompanyList() {
  const [companies, setCompanies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(function fetchCompanyList() {
    async function fetchCompanies() {
      const companiesRes = await JoblyApi.getAllCompanies();
      console.log('companiesRes--->>', companiesRes)
      setCompanies(companiesRes);
    }
    fetchCompanies();
  }, [])

  useEffect(function fetchCompaniesBySearch() {
    async function searchCompanies() {
      const searchRes = await JoblyApi.getCompaniesBySearchTerm(searchTerm)
      setCompanies(searchRes);
    }
    searchCompanies();
  }, [searchTerm])


  function handleSave(formData) {
    console.log("handleSave formData", formData)
    setSearchTerm(formData.searchForm);
  }


  //Todo define handle save function

  return (
    <div className='CompanyList'>
      <div>
        <SearchForm handleSave={handleSave} />
      </div>
      {companies.map(comp => (<div key={comp.handle}> <CompanyCard company={comp} /> </div>))}
    </div>)
}

export default CompanyList;