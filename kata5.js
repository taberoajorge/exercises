/*
Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

solution('abc') // should return ['ab', 'c_']
solution('abcdef') // should return ['ab', 'cd', 'ef']


*/


function solution(str){
    let result = [];
    if (str.length % 2 === 0){
      for (let i = 0; i < str.length; i+=2) {
        result.push(str[i] + str[i+1]); 
      }
     } else {
       for (let i = 0; i < str.length; i+=2) {
        (str[i+1 ])
        ? result.push(str[i] + str[i+1 ])
        : result.push(str[i] + '_')
      }
     }
    return result
  }