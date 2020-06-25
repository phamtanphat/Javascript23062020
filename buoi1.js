// 1 : Khai bao bien
// var a = 5
// const b = 6
// a = 10
// b = 12
// console.log(a)
// console.log(b)

// 2 : Kieu du lieu
// null 
// undenfined
// Th1 : Khai bao 1 bien khong gan gia tri 
// var a
// console.log(a)
// TH2 : Truy van toi key khong ton tai cua object
// const teo = {
//     name : "Nguyen Van Teo",
//     age : 10
// }
// console.log(teo.address)
// Th3 : Function khong return
// function showName(name){
//     console.log(name)
//     return
// }
// console.log(showName("Phat"))

// 3 : Object
// const teo = {
//     name : "Nguyen Van Teo",
//     age : 10
// }
// console.log(teo.address)

// 4 : Array
// const arrayNames = ["Teo","Ti","Tun"]
// arrayNames[0] = "Tuan"
// console.log(arrayNames[0])
// mutable vs immutable

// 5 : Toan tu
// + - * / % , ++ , --
// Do uu tien cua toan tu
// 1 :  ++ --
// 2 :  * , /
// 3 :  + , -
// var a = 5
// var b = 6 
// var ketqua = a++ - --b  + --a + b-- + ++a - b++ + b-- - b++
// 5 - --b  + --a + b-- + ++a - b++ + b-- - b++  a = 6 , b = 6
// 5 - 5  + --a + b-- + ++a - b++ + b-- - b++  a = 6 , b = 5
// 5 - 5  + 5 + b-- + ++a - b++ + b-- - b++  a = 5 , b = 5
// 5 - 5  + 5 + 5 + ++a - b++ + b-- - b++  a = 5 , b = 4
// 5 - 5  + 5 + 5 + 6 - b++ + b-- - b++  a = 6 , b = 4
// 5 - 5  + 5 + 5 + 6 - 4 + b-- - b++  a = 6 , b = 5
// 5 - 5  + 5 + 5 + 6 - 4 + 5 - b++  a = 6 , b = 4
// 5 - 5  + 5 + 5 + 6 - 4 + 5 - 4  a = 6 , b = 5
// 13
// console.log(ketqua)
// ? (10 , 13 , 12)

// 6 : Function
// function showName(name){
//     console.log(name)
//     return
// }
// console.log(showName("Phat"))

// 7 : Object method
const teo = {
    name : "Nguyen Van Teo",
    age : 10,
    info : function(){
        console.log("Name " + this.name)
        console.log("Age " + this.age)
    }
}
teo.info()

