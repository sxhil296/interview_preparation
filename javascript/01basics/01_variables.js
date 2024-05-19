const accountId = 244    //can not be changed
let accountEmail = "js@gmail.com"  
var accountPassword = "123456"
// accountCity = "sre" this is possible but avoid using this
let accountState;  //undefined - value is not defined but variable is declared

// accountId = 2
accountEmail = "hc@gmail.com"
accountPassword ="212121"
accountCity = "jaipur"

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);


// avoid using var
// var is globally scoped while let is block-scoped
