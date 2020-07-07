// 22 : Toan tu 3 ngoi
// const a = 5
// const b = 6

// if(a > b){
//     console.log("A lon hon b")
// }else{
//     console.log("A be hon hoac bang B")
// }
// console.log(a > b ? "A lon hon B" : "A be hon hoac bang B")

// 23 : Function scope
// var a = 5
// function tinhtong(){
//     var a = 7
//     var b = 6
//     return a + b;
// }
// console.log(tinhtong())

// var a = 1
// function random(){
//   var a = Math.random()
//   console.log(a)
// }
// random()
// console.log(a)

// 24 : Cach su dung tu khoa khai bao bien

// for(let i = 0 ; i <= 10 ; i++){
//     console.log("AAA")
// }
// console.log(i)

// 25 : function context and bind

// const teo = {
//     name : 'Nguyen Van Teo',
//     age : 20,
//     showName : function(){
//         console.log(this.name)
//     }
// }
// const showName2 = teo.showName.bind({name : "Nguyen van TI"})
// showName2()

// 26 : Arrow function

// const teo = {
//     name : 'Nguyen Van Teo',
//     age : 20,
//     showName : function(){
//         console.log(this.name)
//         var a = () => {
//             console.log(this.name)
//         }
//         a()
//     }
// }
// teo.showName()

// const arrayNames = ['Teo','Ti','Tun']
// const newArrayNames = arrayNames.map(function(value , index){
//     return 'Ti'
// })
// const newArrayNames = arrayNames.map(value => {
//     return value
// })
// console.log(newArrayNames)

// const showName = () => {

// }

// 27 : Template string

// const teo = {
//     name : "Nguyen Van Teo",
//     age : 20
// }
// const string = "Xin chao " + teo.name + " . Ban hien tai " + teo.age + " tuoi"
// const string1 = `Xin chao  ${teo.name}  . Ban hien tai ${teo.age}  tuoi`
// console.log(string)
// console.log(string1)


//28 : argument

// function tinhtong(){
//     return Array.from(arguments).reduce((accum , currentValue) => {
//         return accum + currentValue
//     },0)
// }
// console.log(tinhtong(1,2,3,4,5,6,7,8,9,10))


// 29 : Default param
// function tinhtong(a = 5, b = 5){
//     console.log(a + b)
// }
// tinhtong()

//30 : Call

// function greeting(name,age){
//     console.log(`Hi! ${name} . I am ${age} . Address ${this.address}`)
// }
// greeting.call({address : 'Quan 10'} , 'Tom' , 10)

//31 : Apply
    // function sum(){
    //     const numbers = Array.from(arguments)
    //     return numbers.reduce((sum , num )=> sum + num , 0)
    // }
    // function average(){
    //     const x = sum.apply(null,arguments)
    //     return x / arguments.length
    // }
    // average(1,2,3,6)
  
  