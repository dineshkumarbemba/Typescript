let a=10;
let b=10.5;

console.log(typeof a);
console.log(typeof b);
//2.String

let firstName="Dineshkumar";
let lastName='Thangavelu';
let role="'Senior' Test Engineer";

console.log(typeof firstName);
console.log(typeof lastName);
let details=`Employee firstname is ${firstName} and Employee lastname is ${lastName} and employee role is ${role}`
console.log(details)

//boolean

let num=10>20;
console.log(typeof num)

let company;
console.log(typeof company)

let project=null;
console.log(typeof project)

let empDetails={
    "empName":"Dineshkumar thangavelu",
    "empRole":"'Senior' Test Engineer",
    "project":"Hilton",
    "Address":{
        "city":"Salem",
        "street":"Ramnagar,Poosaripatti",
        "State":"Tamilnadu."
    }
}
console.log(empDetails)
console.log(empDetails.Address.city)
console.log(empDetails["empName"])
console.log(empDetails["Address"]["street"])

//arrays

let fruits=["Apple","Mango","Orange","Pomogranate","Banana"];
let price=[100,200,300,400,500];
let fruitsandprice=["Apple",100,"Mango",200,"Orange",300,"Pomogranate",400,"Banana",500];

for(let i=0;i<fruitsandprice.length;i++){
    console.log(fruitsandprice[i])
}
console.log(fruits[4])

//set

let set=new Set();
set.add(1234);
set.add("Dinesh");
set.add("kumar");
set.add("kumar");
console.log(set)

//map

let map=new Map();
map.set(9500,{company:"City Union Bank",role:"Senior Associate"});
map.set(52107621,{company:"HClTech",role:"Senior Test Engineer"});
map.set(5602676,{company:"CUB",role:"Relationship Manager1"});
console.log(map)
console.log(map.get(9500).company)

for(let [id,details]of map){
    console.log(`Id is ${id} and company name is ${details.company} and role of employee is ${details.role}`)
}