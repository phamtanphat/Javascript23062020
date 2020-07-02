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

function findDivisibleNum(array, x) {
    // viết code ở đây.
    return array.find(function(value){
        if(value % x == 0) return true
        return false 
    })
}
console.log(findDivisibleNum([1, 3, 4], 2))