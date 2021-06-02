import React, {useState} from 'react';


function SearchForm({handleSave}){
    const [formData, setFormData] = useState("");

    function handleChange(evt) {
        const { name, value } = evt.target;
        setFormData(fData => ({
          ...fData,
          [name]: value,
        }));
      }
      // end

      function handleSubmit(evt) {
        evt.preventDefault();
        handleSave();
        setFormData('');
      }
      
      
      return (
    
        <form onSubmit={handleSubmit}>
          <input
              type="text"
              id="search"
              name="searchForm"
              value={formData.searchForm}
              onChange={handleChange}
          />
          <button>Search</button>
        </form>
        )
}

export default SearchForm;


