import React from 'react';
import {Link} from 'react-router-dom';

function CompanyCard({company}){
    console.log('logo--->>',company.logoUrl)
    return (
        <Link to={`/companies/${company.handle}`}>
            <div class="card">
                <h5 class="card-header">{company.handle}</h5>
                <div class="card-body">
                    {/* <img class="card-img-right" src={company.logoUrl} alt="CompanyLogo"/> */}
                    <p class="card-text">{company.description}</p>
                </div>
            </div>
        </Link>
    )
};
export default CompanyCard;


