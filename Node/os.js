const os = require("os");
// returns the underlying architecture

let mySystemArch = os.arch();
console.log(mySystemArch);

// return information on the cpus
let myCpuInfo = os.cpus();
console.log(myCpuInfo);

// returns the host name of the operating system as a string

let hostName = os.hostname();
// console.log(hostName);

// returns an object containing network interface that have been assigned a network address.
let networkInfo = os.networkInterfaces();
// console.log(netwokInfo);


// returns the operating system as a string
console.log(os.release());

// returns the total amount of system memmory inbytes as an integer

console.log(os.totalmen());

// returns the system uptime in number of second
console.log(os.uptime);
let uptimeMin = os.uptime() / 3600;

console.log(uptimeMin);


// retuens infomation about the currently effective user
console.log(os.userInfo());






