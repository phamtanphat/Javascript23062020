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

// var a 
// handle(function(a){
//     console.log(a)
// })

// function handle(cb){
//     setTimeout(function(){
//         a = 5
//         cb(a)
//     },2000)
// }

// function binhphuong(num){
//     return num * num
// }

// function tinhtongArray(arr , fn){
//     var ketqua = 0
//     for (const value of arr) {
//         ketqua += fn(value)
//     }
//     return ketqua
// }
// const arrayNums = [1,2,3,4,5]
// console.log(tinhtongArray(arrayNums, binhphuong))

// 15: Ham map
// const arrayNums = [1,2,3,4,5,6,7,8,9,10]
// const newArrayNums = []
// for (const value of arrayNums) {
//     newArrayNums.push(value + 1)
// }
// const newArrayNums = arrayNums.map(function(value ,index){
//     return value +1
// })

// console.log(newArrayNums)
// console.log(arrayNums)

const arrayNums = [1,2,3,4,5,6,7,8,9,10]

Array.prototype.myMap = function(cb){
    const newArray = []
    for(var i = 0 ; i < this.length ; i++){
        newArray.push(cb(this[i]))
    }
    return newArray
}

const newArray = arrayNums.myMap(function(value){
    return value  + 1
})
console.log(newArray)


