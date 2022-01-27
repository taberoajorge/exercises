// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

// My solution 


function generateHashtag (str) {
  str = str.replace(/^\s+|\s+$|\s+(?=\s)/g, "")
  if (!str || str == " " || str.length >= 140 ) {
    return false
  } else {
    return '#' + str.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase()).split('').filter(i => i != ' ').join('')
  }
}

// Best solution 

function generateHashtag (str) {
  return str.length > 140 || str === '' ? false :
    '#' + str.split(' ').map(capitalize).join('');
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}