//Test Case 1: verify the home page.
console.log("******************Test Case1: VERIFY THE HOME PAGE");
loginIntoApplication("Chrome", "Admin", "Admin123")
console.log("Verify the home page is displayed or not");
logoutFromApplication()

//Test Case2: Verify the account balance
console.log("******************Test Case2: VERIFY THE ACCOUNT BALANCE");
loginIntoApplication("Edge", "Dinesh", "Dinesh123")
console.log("Verify the home page is displayed");

console.log("verify the account balance is displayed as " +  getAccountBalance());
logoutFromApplication()

function loginIntoApplication(browser, username, password) {
    console.log(`Launch the ${browser} Browser`);
    console.log("Enter the URL:https://icici.com/");
    console.log(`Enter the username as ${username} and password as ${password}`);
    console.log("Click on the login button");
}

function logoutFromApplication() {
    console.log("Logout from the application");
    console.log("Close the browser");
}

function getAccountBalance() {
    console.log("Navigate to account balance page");
    let accountBalance = 100000;
    return accountBalance;
}