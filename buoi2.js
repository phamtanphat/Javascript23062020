// 11 : For of
//Array
// const arrayNames = ["Teo","Ti","Tun","Hoa","Tuan"]
// for (const value of arrayNames) {
//     console.log(value)
// }
//Object
// const teo = {
//     name : "Nguyen Van Teo",
//     age : 10
// }
// for (const value of ) {
//     console.log(value)
// }

// 12 : Array Method
// const arrayNames = ["Teo","Ti","Tun"] 
// const arrayNames2 = ["Hoa","Tuan"] 
// Them vi tri cuoi
// arrayNames.push("Toan")
// Xoa vi tri cuoi
// arrayNames.pop()
// Them vi tri dau
// arrayNames.unshift("A")
// Xoa vi tri dau
// arrayNames.shift()
// Noi du lieu
// const newArrays = arrayNames.concat(arrayNames2)
// console.log(newArrays)

// 14 : Callback

// function binhphuong(num){
//     return num * num
// }

// function tinhtongArray(arr , fn){

// }

// function callback(){

// }

// function getName(){
    
// }

var a 
handle(function(a){
    console.log(a)
})

function handle(cb){
    setTimeout(function(){
        a = 5
        cb(a)
    },2000)
}

function binhphuong(num){
    return num * num
}

function tinhtongArray(arr , fn){
    var ketqua = 0
    for (const value of arr) {
        ketqua += fn(value)
    }
    return ketqua
}
const arrayNums = [1,2,3,4,5]
console.log(tinhtongArray(arrayNums, binhphuong))



