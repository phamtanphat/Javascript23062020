// 32 : Rest (Nhan nhiem tham so truyen vao)
// function sum(...nums){
//     return nums.reduce((a ,b) => a + b)
// }
// console.log(sum(1,2,3,4,5))

//33 : spread (coppy cac phan tu)
const arrNums = [1,2,3]

const newArr = arrNums
newArr.pop()
console.log(arrNums)
console.log(newArr)