import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // the token for interactive with the API will be stored here.
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = (method === "get")
      ? data
      : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Get details on a company by handle. 
   * takes in url parameter that represents the company handle
   * getCompany(anderson-arias-morrow) ---->
   * {
  "company": {
    "handle": "anderson-arias-morrow",
    "name": "Anderson, Arias and Morrow",
    "description": "Somebody program how I....",
    "numEmployees": 245,
    "logoUrl": "/logos/logo3.png",
    "jobs": [
      {
        "id": 7,
        "title": "Technical brewer",
        "salary": 157000,
        "equity": "0"
      }, ......
  }
}
  */
  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);// consistent with slashes at end
    return res.company;
  };


  /** Get a list of companies. 
   * 
   * getCompanies() ----> optional search term to search for filter companies
   * {
  "companies": [
    {
      "handle": "anderson-arias-morrow",
      "name": "Anderson, Arias and Morrow",
      "description": "Somebody program how I....",
      "numEmployees": 245,
      "logoUrl": "/logos/logo3.png"
    }, ......
  ]
}
*/
  static async getCompanies(searchTerm) {
    let data = searchTerm ? { name: searchTerm } : {};
    let res = await this.request(`companies/`, data);
    return res.companies;
  };



  /** Get a list of all jobs.
   * 
   * getJobs() ----> optional search term to filter jobs
   * 
   * {
  "jobs": [
    {
      "id": 200,
      "title": "Accommodation manager",
      "salary": 126000,
      "equity": null,
      "companyHandle": "mejia-scott-ryan",
      "companyName": "Mejia, Scott and Ryan"
    }, .....
  ]
}
 */
  static async getJobs(searchTerm) {
    let data = searchTerm ? { title: searchTerm } : {};
    let res = await this.request(`jobs/`, data);
    return res.jobs;
  };

  /** 
  POST /auth/token:  { username, password } => { token }
  *
  * Returns JWT token which can be used to authenticate further requests.
  
*/
  static async login(formData) {
    let res = await this.request('auth/token/', formData, "post");
    this.token = res;
    return res;
  }

  /** Register
   * 
  POST /auth/register:   { user } => { token }
 *
 * FormData: { username, password, firstName, lastName, email }
 *
 * Returns JWT token which can be used to authenticate further requests.
*/

  static async register(formData) {
    let res = await this.request('auth/register/', formData, "post");
    this.token = res;
    return res;
  }

  /** GET /[username] => { user }
 * Returns { username, firstName, lastName, isAdmin, jobs }
 *   where jobs is { id, title, companyHandle, companyName, state }
 *
 * Authorization required: admin or same user-as-:username
 * */
  static async getUser(username) {
    let res = await this.request(`/users/${username}`);
    console.log("getUser----> res", res);
    return res.user;
  }


}

// for now, put token ("testuser" / "password" on class)
JoblyApi.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
  "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
  "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";



export default JoblyApi;