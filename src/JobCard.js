import React from "react";
import Card from 'react-bootstrap/Card'
/**
 * Routes ---> CompanyDetail ---> JobCardList ----> JobCard
 *        ----> JobList----> JobCardList----> JobCard
 * props: Job :  Example: 
 *  {
      "id": 200,
      "title": "Accommodation manager",
      "salary": 126000,
      "equity": null,
      "companyHandle": "mejia-scott-ryan",
      "companyName": "Mejia, Scott and Ryan"
    }
 * 
 * state: none
 * Renders a card with job details.
 * */

function JobCard({ job }) { // destructure
  const {title, salary, equity } = job;
  return (
    <Card className="card JobCard" style={{ marginBottom: "30x" }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>Salary:{salary} </Card.Text>
        <Card.Text>Equity: {equity} </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default JobCard;