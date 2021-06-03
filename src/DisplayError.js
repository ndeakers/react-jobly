import React from "react"
import Alert from "react-bootstrap/Alert";
/**
 * props: an array of error messages.
 * DisplayError---> Displays Alert
 * 
 */

function DisplayError({ errors }) {

  let errorString = errors.join(", ")
  return <Alert variant="danger">{errorString}</Alert>
}

export default DisplayError;