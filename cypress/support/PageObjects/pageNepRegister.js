class pageHome {
    constructor() {
        //CSS selectors and XPATHS for the Login Page
        this.tableView = "#regTableLayout";
        this.customerColumn = 'tr>th:nth-child(3)';
        this.txtRegister = "#filter_register";
        this.txtQoute = "#filter_quote";
        this.txtJob = "#filter_job";
        this.txtCustomer = "#filter_account";
        this.txtStreet = "#filter_street";
        this.txtSuburb = "#filter_suburb";
        this.txtEstimator = "#filter_estimator";
        this.tdRefNo = "//table[@id='regTable']//td[1]"
        this.tdStatusNo = "//table[@id='regTable']//td[11]"
        this.tdSiteName = "//table[@id='regTable']//td[4]"
    }
}
export default pageHome