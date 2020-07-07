// 32 : Rest (Nhan nhiem tham so truyen vao)
// function sum(...nums){
//     return nums.reduce((a ,b) => a + b)
// }
// console.log(sum(1,2,3,4,5))

//33 : spread (coppy cac phan tu)
// const arrNums = [1,2,3]

// const newArr = arrNums
// newArr.pop()
// console.log(arrNums)
// console.log(newArr)

// 34 : Destructuring
// const arrNums = [5,2,1,3,0,9,6]
// const [a,b,c,d,e] = arrNums
// console.log(b)

const teo = {
    name : 'teo',
    age : 10,
    address : 'Quan 10'
}
const {name , age , address } = teo
console.log(name)