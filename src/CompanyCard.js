import React from 'react';
import { Link } from 'react-router-dom';

function CompanyCard({ company }) {
    console.log('logo--->>', company.logoUrl)
    return (
        <Link to={`/companies/${company.handle}`}>
            <div className="card">
                <h5 className="card-header">{company.handle}</h5>
                <div className="card-body">
                    {/* <img className="card-img-right" src={company.logoUrl} alt="CompanyLogo"/> */}
                    <p className="card-text">{company.description}</p>
                </div>
            </div>
        </Link>
    )
};
export default CompanyCard;


