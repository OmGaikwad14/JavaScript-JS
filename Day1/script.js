const accountId = 171298;
let accountEmail = "om14@gmail.com";
var accountPassword = "1234";
accountCity = "Mumbai";
let accountState;

// accountId = 2 not allowed

accountEmail = "vishal02@gmail.com";
accountPassword = "12345";
accountCity = "Jalna";

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);