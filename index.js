// function sayHello(name) {
//   return 'Hello' +', '+ name
// }
// // console.log(sayHello('Mr.Jon'));

// const stringToNumber = function(str){
//   return +str;
// }
// // console.log(stringToNumber('1234'));

// function addFive(num) {
//   return num + 5
// }
// // console.log(addFive(2));

// String.prototype.isUpperCase = function() {
//   return this.match(/[a-z]/g) ? false : true
// }


// function areYouPlayingBanjo(name) {
//   return name[0] == 'R' || name [0] == 'r' ? name + " plays banjo" : name + " does not play banjo"
// }
// // console.log(areYouPlayingBanjo('range'));

// function problem(x){
//   return x === +x ? x*50+6 : "Error"
// }
// // console.log(problem(2));
// // console.log(problem('hello'));

// function abbrevName(name){
//   let a = []
//   let b = []
//   a.push(name.split(" ")[0].toUpperCase())
//   b.push(name.split(" ")[1].toUpperCase())
//   return a.join('')[0]+'.'+b.join('')[0]
// }
// // console.log(abbrevName('Pitr Saske'));
// // console.log(abbrevName('ditr qaske'));

// function apple(x){
//   return x**2 > 1000 ? 'It\'s hotter than the sun!!' : 'Help yourself to a honeycomb Yorkie for the glovebox.'
// }
// // console.log(apple(2));

const sortArr = (arr) => {
  let a = []
  return arr.filter(el => {
    let b = (!el == 0)
    if (el == 0) {
      a.push(el)
    }
    return b
  });
}
console.log(sortArr([2,1,4,0,'a',8,0,'e']));