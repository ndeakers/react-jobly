import React from "react";
import Card from 'react-bootstrap/Card'

function JobCard({ job }) {

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
 *  Renders a card with job details.
 * */

  return (
    <Card className="card JobCard" style={{ marginBottom: "30x" }}>
       <Card.Body>
       <Card.Title>{job.title}</Card.Title>
       <Card.Text>Salary:{job.salary} </Card.Text>
       <Card.Text>Equity: {job.equity} </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default JobCard;