//16 : Ham filter
// const arrayNumbers = [1,2,3,4,5,6,7,8,9,10]

// const newArrayNumbers = arrayNumbers.filter(function(value){
//   if (value % 2 == 0) return true  
//   return false
// })
// console.log(newArrayNumbers)

// Viết hàm trả về số chẵn đầu tiên trong mảng sử dụng find method
// Nếu không tìm thấy số chẵn nào thì trả về undefined
// function findFirstEvenNumber(array) {
// 	return array.find(function(value){
//         if(value % 2 == 0) return true
//         return false
//     })
// }
// console.log(findFirstEvenNumber([1,2,3,4,5,6,7,8,9,10]))

/**
 * viết hàm tìm số chia hết cho x đầu tiên có trong mảng
 * @params {array} array - Mảng các chữ số
 * @params {number} x - Số bị chia
 * Nếu không có trả về undefined
 * Example: 
 * findDivisibleNum([1, 3, 4], 2) => 4
 */

// function findDivisibleNum(array, x) {
//     // viết code ở đây.
//     return array.find(function(value){
//         if(value % x == 0) return true
//         return false 
//     })
// }
// console.log(findDivisibleNum([1, 3, 4], 2))

// 17 : Reduce
// const arrayNumbers = [1,2,3,4,5,6,7,8,9,10]

// const total = arrayNumbers.reduce(function(accumulator , currentValue){
//     console.log("Accumulator " + accumulator + " CurrentValue " + currentValue)
//     return accumulator + currentValue 
// },0)

// Trả về số lượng người đã vote
// function totalVotes(arr) {
//     return arr.reduce(function(accum , currentvalue){
//         if ( currentvalue.voted){
//             accum++
//         }
//         return accum
//     },0)
// }

// var voters = [
//   {name:'Bob' , age: 30, voted: true},
//   {name:'Jake' , age: 32, voted: true},
//   {name:'Kate' , age: 25, voted: false},
//   {name:'Sam' , age: 20, voted: false},
//   {name:'Phil' , age: 21, voted: true},
//   {name:'Ed' , age:55, voted:true},
//   {name:'Tami' , age: 54, voted:true},
//   {name: 'Mary', age: 31, voted: false},
//   {name: 'Becky', age: 43, voted: false},
//   {name: 'Joey', age: 41, voted: true},
//   {name: 'Jeff', age: 30, voted: true},
//   {name: 'Zack', age: 19, voted: false}
// ];
// console.log(totalVotes(voters)) // 7

// function countOccurrences(arr) {
//     return arr.reduce(function(accum , currentvalue){
//         if(currentvalue in accum){
//             accum[currentvalue]++
//         }else{
//             accum[currentvalue] = 1
//         }
//         return accum
//     },{})
// }
// console.log(countOccurrences(["a", "b", "c", "b", "a", "a"]))

// {"a" : 3 , "b" : 2 , "c" :1 }

// const teo = {
//     name :"nguyen Van teo",
//     age : 20
// }

// teo['address'] = "38 nguyen lam"
// console.log(teo)


//18 : Ham sort

// const arrayNumbers = [1,4,3,7,11,10,21,20,2,31,01]

// console.log(arrayNumbers.sort(function(a , b){
//     return  b - a
// }))

// 19 : Math object (Builtin function)
// var value = Math.ceil(0.1)
// var value2 = Math.floor(0.99)
// var value3 = Math.round(0.4)
// 5 - 10
var value4 = Math.round(Math.random() * 5) + 5
console.log(value4)