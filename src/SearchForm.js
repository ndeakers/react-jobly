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
 * Renders search form.
 */
function SearchForm({ handleSave }) {
  const [formData, setFormData] = useState({ searchForm: "" }); // could be an empty string

  /** Handles form changes */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(fData => ({ // use evt.target.value since just one input
      ...fData,
      [name]: value,
    }));
  }

  /** Handles form submition */
  function handleSubmit(evt) {
    console.log('inside handle submit')
    evt.preventDefault();
    handleSave(formData.searchForm.trim());
    setFormData({ searchForm: "" });
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


