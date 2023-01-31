// 01. Create a variable.js file and declare variables and assign string, boolean, undefined and null data types, Display all the value with their data type.

// String
var Name = 'Shreyas'
var isloggedIn = true;
var email
var listOfCoures = null;
var currentNumDevicesOnline = 3;
var loggedInDevices = ['iphone 13', 'moto 13', 'LG']

const user = {
    Name,
    isloggedIn,
    email,
    listOfCoures,
    loggedInDevices
}

console.log(`
Name is variable of data type:- ${typeof Name}
isloggedIn is variable of data type:- ${typeof isloggedIn}
email}is variable of data type:- ${typeof email}
listOfCoures is variable of data type:- ${typeof listOfCoures}
currentNumDevicesOnline is variable of data type:- ${typeof currentNumDevicesOnline}
user is variable of data type:- ${typeof user}
loggedInDevices is variable of data type:- Array
`); 


