import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'



/** 
 * Routes---> CompanyList ----> SearchForm
 *       ----> JobList----> SearchForm
 * 
 * Props: fn; handleSave
 * State: FormData
 * 
 * Renders search form
 */
function SearchForm({ handleSave, searchTerm }) {
  const [formData, setFormData] = useState("");
  // console.log('formData--->>', formData)


  /** Handles form changes */
  function handleChange(evt) {
    setFormData(evt.target.value)
  }
  //end

  /** Handles form submition */
  function handleSubmit(evt) {

    evt.preventDefault();
    handleSave(formData);
  }


  return (
    <Form inline onSubmit={handleSubmit} className="justify-content-center">
      <FormControl
        type="text"
        placeholder="Search"
        className="mr-sm-2"
        name="searchForm"
        value={formData.searchForm}
        onChange={handleChange}
      />
      <Button
        type="submit"
        variant="primary">
        Search
        </Button>
    </Form>
  )
}


export default SearchForm;


