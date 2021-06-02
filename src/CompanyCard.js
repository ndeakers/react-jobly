import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card'


/**
 * Routes ---> CompanyList ---> CompanyCard
 * props: company :  Example: 
 *  {
      "handle": "anderson-arias-morrow",
      "name": "Anderson, Arias and Morrow",
      "description": "Somebody program how I...",
      "numEmployees": 245,
      "logoUrl": "/logos/logo3.png"
    }
 * 
 * state: none
 *  Renders a card with company details.
 * */

function CompanyCard({ company }) {
    return (

        <Card className="CompanyCard" style={{ marginBottom: "30x" }}>
            <Link to={`/companies/${company.handle}`} >
                <Card.Body>
                    <Card.Title>{company.handle}</Card.Title>
                    <Card.Img src={company.logoUrl} style={{ width: "100px" }} />
                    <Card.Text>
                        {company.description}
                    </Card.Text>
                </Card.Body>
            </Link>
        </Card>
    )
};

export default CompanyCard;


