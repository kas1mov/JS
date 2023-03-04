function howManyLightsabersDoYouOwn(name) {
  if( name == 'Zach'){
     return 18
  }else{
    return 0
  }
}
// console.log(howManyLightsabersDoYouOwn());



function repeatStr (n, s) {
  let a = s.toString()
  return  a.repeat(n)
}
// console.log(repeatStr(3,'***'));


function grow(x){
  let a = 1
   for(let i=0; i < x.length;i++){
      a*=x[i]
   }
  return a
}
// console.log(grow([1,2,3,4]));


function shortcut (string) {
  let a = 'aeiou'
  return string.split("").filter(char => !a.includes(char.toLowerCase())).join("");
}
// console.log(short ('hello'));



function SubtractSum(n){
  let a = 0
  for(let i=0; i<=n.length;i++){
    if(n>=10){
      n[i]+a
    }
    return a
  }
  if (n=10){
    return 'apple'
  }
}
// console.log(SubtractSum(10));