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
  const [formData, setFormData] = useState({ searchForm: "" });
    // console.log('formData--->>', formData)
  
  /** Handles form changes */
    function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value,
    }));
  }
  // end
  /** Handles form submition */
  function handleSubmit(evt) {
      console.log('inside handle submit')
    evt.preventDefault();
    handleSave(formData);
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


