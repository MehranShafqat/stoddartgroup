class pageLogin {
    constructor() {
        //CSS selectors and XPATHS for the Login Page
        this.textEmail = ":nth-child(3) > .form-control";
        this.textPassword = "#password";
        this.buttonLogin = ".btn";
        this.dialogPopup = ".ui-dialog-titlebar";

    }
}
export default pageLogin