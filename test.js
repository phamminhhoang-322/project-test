// bài 1
// function reverse(str) {
    
// let strChar= str_input.split('');
// let str_output = "";
// console.log(strChar);
// for (let i = strChar.length - 1; i >=0; i--){
//       str_output += strChar[i];
// }
// return str_output;
// }

// Bài 2
// let input = "this is test";
// let output = input.toLowerCase().split('');
// for (let i = 0; i < output.length; i++){
//     output[i] = output[i].charAt(0).toUpperCase() + output[i].slice(1);
// }
// output = output.join('');
// console.log(output);

// bài 3
// let Arr = [1,2,3,3,4,5,6] 
// function delete1(arr) {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++){
//         if(newArr.indexOf(arr[i]) === -1){
//             newArr.push(arr[i])
//         }
          
             
//     }
//     return newArr;
// }
// console.log(delete1(Arr));

// bài 4
// let NV = [{
//     name = "Minh Hoang",
//     age = "21",
//     salary = "10000",
//     position = "Business Analyst",
// },
// {
//     name = "Huong Thao",
//     age = "21",
//     salary = "20000",
//     position = "QC",
// },
// {
//     name = "Minh Trang",
//     age = "18",
//     salary = "9000",
//     position = "Accounting",
// }
// ];
// let userChoose = true;
// while (userChoose)
// {
//     let userChoose = prompt("Enter your command(create, delete, update, read) | E.exit");
//     if(userChoose == "create"){
//         let newTask = [];
//         newTask.name = prompt("enter new name");
//         newTask.age =  prompt("enter new age");
//         newTask.salary =  prompt("enter new salary");
//         newTask.position =  prompt("enter new position");
//         NV.push(newTask);
//         console.table(NV);
//         i = 1;
//         for (let key in NV){
//             console.log(i + "." + NV[key].name);
//             console.log( "age: " + NV[key].age);
//             console.log( "salary: " + NV[key].salary);
//             console.log( "position: " + NV[key].position);
//             i ++; 
//         }
//     }
//     else if (userChoose == "update"){
//         let newNV = prompt("enter new employee:")
//         let newName = prompt("enter new Name:");
//         let newAge = prompt("enter new Age:");
//         let newSalary = prompt("enter new Salary:");
//         let newPosition = prompt("enter new Position:");
//         NV[newNV - 1].name = newName;
//         NV[newNV - 1].age = newAge;
//         NV[newNV - 1].salary = newSalary;
//         NV[newNV - 1].position = newPosition;
//         console.table(NV);
//         i = 1;
//         for (let key in NV){
//             console.log(i + "." + NV[key].name);
//             console.log( "age: " + NV[key].age);
//             console.log( "salary: " + NV[key].salary);
//             console.log( "position: " + NV[key].position);
//             i ++; 
//         }
//     }
//     else if (userChoose == "delete"){
//             let deleteNV = prompt("Enter the employee:");
//             delete NV[deleteNV - 1];
//             console.table(NV);
//             i = 1;
//         for (let key in NV){
//             console.log(i + "." + NV[key].name);
//             console.log( "age: " + NV[key].age);
//             console.log( "salary: " + NV[key].salary);
//             console.log( "position: " + NV[key].position);
//             i ++; 
//         }

//     }
//     else if (userChoose == "read"){
//         console.table(NV);
//     }
//     else if (userChoose == "E"){
//         break;
//     }

//     }

// bài 5
// let input = prompt(`Nhap vao ngay thang nam`);
// let a = input.split('/');
// if (a[1] == 2 && a[2] % 4 == 0 && (a[0] >= 1 && a[0] <= 29)) {
//     console.log(nextDay(a, 29));
// } else if (a[1] == 2 && a[2] % 4 != 0 && (a[0] >= 1 && a[0] <= 28)) {
//     console.log(nextDay(a, 28));
// } else if ((a[0] >= 1 && a[0] <= 31) && (a[1] == 1 || a[1] == 3 || a[1] == 5 || a[1] == 8 || a[1] == 10 || a[1] == 12)) {
//     console.log(nextDay(a, 31));
// } else if ((a[0] >= 1 && a[0] <= 30) && (a[1] == 4 || a[1] == 6 || a[1] == 9 || a[1] == 11)) {
//     console.log(nextDay(a, 30));
// } else {
//     console.log('Khong hop le');
// }

// function nextDay(a, lastDay) {
//     if (a[1] == 12 && a[0] == 31) {
//         a[0] = 1;
//         a[1] = 1;
//         a[2] = Number(a[2]) + 1;
//     } else if (a[0] == lastDay) {
//         a[0] = 1;
//         a[1] = Number(a[1]) + 1;
//     } else {
//         a[0] = Number(a[0]) + 1;
//     }
//     let b = a.join('/');
//     return (b);
// }





