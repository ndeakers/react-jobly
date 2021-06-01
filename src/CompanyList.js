import React, {useState, useEffect} from "react";
import JoblyApi from './api'; 
import CompanyCard from './CompanyCard';


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

  useEffect(function fetchCompanyList(){
    async function fetchCompanies(){
      const companiesRes = await JoblyApi.getAllCompanies();
      console.log('companiesRes--->>', companiesRes)
      setCompanies(companiesRes);
    }
    fetchCompanies();
  }, [])


  return (
          <div className='CompanyList'>
            {companies.map(comp => ( <div key={comp.handle}> <CompanyCard company={comp}/> </div> ))}
          </div>)
}

export default CompanyList;