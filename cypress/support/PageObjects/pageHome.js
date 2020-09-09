class pageHome {
    constructor() {
        //CSS selectors and XPATHS for the Login Page
        this.ullistCladding = "li[data-value='lu_lu']>a>span";
        this.nepDd = "#nepDd";
        this.register = "a[href='/register'][class='dropdown-item']";
        this.tableView = "#regTableLayout";
        this.customerColumn = 'tr>th:nth-child(3)';

    }
}
export default pageHome