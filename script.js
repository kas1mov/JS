// document.getElementById('title').style.textAlign = 'center'
// document.getElementById('title').style.fontSize = '22px'
// document.getElementById('yil').style.fontSize = '38px'
// document.getElementById('yil').style.color = 'blue'
// document.getElementById('div').style.textAlign = 'center'
// document.getElementById('link').style.color = 'black'
// document.getElementById('link').style.fontSize = '18px'
// document.getElementById('btn').style.background = 'red'
// document.getElementById('btn').style.marginTop = '10px'
// document.getElementById('divv').style.textAlign = 'center'
// document.getElementById('list').style.listStyle = 'none'
// document.getElementById('list').style.textAlign = 'center'
// document.getElementById('list').style.fontSize = '22px'
// // document.getElementById('list_item').style.background = 'green'
// // document.getElementById('list_item1').style.background = 'yellow'
// const getById = document.getElementsByTagName('li')
// for (let i=0;i<getById.length;i++){
//     getById[0].style.background = 'green'
//     getById[1].style.background = 'yellow'
//     getById[2].style.background = 'red'
//     getById[3].style.background = 'red'
//     getById[4].style.background = 'red'
//     getById[5].style.background = 'red'
//     getById[6].style.background = 'red'
// }
// const digitalRoot = (n) => {
//     let el = 0
//     let a = n.toString()
//     for(let i=0; i<a.length;i++){
//         el+=Number(a[i])
//     }
//     if(el>10){
//         digitalRoot(el)
//     }else{
//         console.log(el);
//     }
// }
// digitalRoot(9988);
// digitalRoot(16);

// const con = (array) => {
//     let a = 1
//     for(let i=0; i<array.length;i++){
//         a=a*array[i]
//     }
//     return a
// }
// console.log(con([32,1,2]));  

// const endly = (str,end) => {
//     console.log(str.endsWith(end));
// }
// endly("hello world hammaga salom do'stlar","do'stlar")

// const repeat = (n,count) => {
//     let a = n.toString()
//     if(n<0){
//         return 'to`g`ri kiriting'
//     }else if(count<0){
//         return 'mavjud emas'
//     }
//     return a.repeat(count)
// }
// console.log(repeat(23,5));


// const MainSort = (array1,array2) => {
//    let el = [...array1,...array2]
//     return el.sort(function (a,b){
//         return a-b;
//     })
// }
// console.log(MainSort([23,5,78,90],[0,-12,34,65]));


// const OneandZero = (str) => {
//    let b = '0'
//    return str.split('').filter((el) => !b.includes(el)).join("")
// }
// console.log(OneandZero('011110001'));


// const factar = (n) => {
//     if(n>10){
//         let a = Math.floor(n/2);
//         let b = 1
//         for(let i=1; i<a; i++){
//             b*=i
//         }
//         return b
//     }else if(n<0){
//         return 'Musbat son kirit'
//     }
// }
// console.log(factar(5));


// function isAvgWhole(arr) {
//    let a = 0
//    arr.forEach( el => {
//     a+=el
//    });
//    let b = a/arr.length
//    if(b%1==0){
//        return 'true'
//     }else{
//         return 'false';
//     }
    
// }
// // console.log(isAvgWhole([3,5,9]));
// // console.log(isAvgWhole([1,1,1,1]));
// // console.log(isAvgWhole([2,2,2,2]));

// function reverseCase(str) {
//    return str.split('').map((item) => item===item.toLowerCase() ? item.toUpperCase() : item.toLowerCase()).join('')
// }
// // console.log(reverseCase('Happy Birthday'));
// // console.log(reverseCase('MANY THANKS'));

// function countTrue (arr){
//     let a = 0
//     arr.forEach((el) => {
//         if(el==true){
//             a+=el
//         }
//     })
//     return a
    
// }
// // console.log(countTrue([true,false,true]));

// class Person {
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }

//     compareAge(other){
//        if(p1.age<p2.age){
//         //   console.log('Joel mendan ko`ra kattaroq');
//        }else  if(p1.age===p3.age){
//         //   console.log('Lily bilan yoshlarimiz teng');
//        }
//     }
// }
// p1 = new Person("Samuel", 24)
// p2 = new Person("Joel", 36)
// p3 = new Person("Lily", 24)
// // p1.compareAge(p2)
// // p1.compareAge(p3)

// const includesStr = (str) =>{
//     if(str.includes('a') && str.includes('g') && str.includes('d')){
//      return 'true'
//     }else{
//      return 'false'
//     }
// }
// // console.log(includesStr("salom hammaga dasturchilar"));
// // console.log(includesStr("salom "));

// function largestSwap(num){
//     let result = Number(String(num).split('').reverse().join(''));
//     if(num>result){
//         return 'true'
//     }else{
//         return 'false'
//     }
// }
// // console.log(largestSwap(43));
// // console.log(largestSwap(37));
// // console.log(largestSwap(91));


// const arraySort = (arr) =>{
//     return arr.filter((el) => el%2==0).join(" ")
// }
// console.log(arraySort([23,45,66,44,21]));

