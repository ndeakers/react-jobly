** APP **

    state- currentUser, token, applied jobs
    fn- handleCurrentUser(), updateToken(), applyForJob()
  
    NavBar - ternary to show logged in Nav or Anonymous Nav
    BrowserRoutes
        Routes Component
*************************************************
    Routes- props: 
        ---> Will all routes using Switch
            "/"
            "/Companies" 
                Companies---> Company Card, CompanySearchForm
            "/Companies/:handle"
                CompanyJobList
            "/jobs"
                Jobs---> Job Card, JobSearchForm
            "/Profile"
                ProfileForm
            "/signUp"
                SignUpForm
            "/Login"
                LoginForm
            Redirect to "/"
*************************************************
    NavBar for Logged In
      ---> HomePage NavLink, Companies NavLink, Jobs NavLink, Profile NavLink, Logout NavLink

    NavBar for not Logged In
        ---> Login NavLink, SignUp NavLink, HomePage NavLink
*************************************************
    Homepage -- props: currentUser
        ---> Jobly slogan, welcomeBack Message
*************************************************
    Anonymous Homepage
        --->LINK LoginForm --- 
        ---> LINK SignUpForm

*************************************************
    Companies --- props: currentUser
                  state: company List. Makes AJAX call to companies,
                         searchTerm
        fn: Makes AJAX call using searchTerm to get companies
        fn: handleSearch-- updates searchTerm
    SearchForm --- prop: handleSearch
    Shows list of companies  ----> Company Card Component


    Company Card Component ----> CompanyJobList
    
    CompanyJobList--- state: companyJobs-- 
                                    make Ajax call to get list of jobs by company handle. maps over and calls Job Card 
                                    Company name, logo, description

    CompanyJobList loops over and renders----> Job Card
                         
*************************************************
    Jobs   
        state: jobList--- AJAX call to jobs. 
        state: searchTerm

        fn: Makes AJAX call using searchTerm to get jobs
        fn: handleSearch-- updates searchTerm
        SearchForm--- prop: handleSearch
       Shows list of Jobs  ----> Job Card 

*************************************************
       Job Card Component Props: {job} ---> job, company, salary equity                  
                                handleApply fn

*************************************************
    ProfileForm: Prop: currentUser
        Username, firstname, lastName, email, password, submit/save