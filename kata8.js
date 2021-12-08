function likes(names) {
    let msg;
    if (!names.length){
      msg = 'no one likes this';
    } else if (names.length === 1) {
      msg = `${names[0]} likes this`;
    } else if (names.length === 2) {
      msg = `${names[0]} and ${names[1]} like this`;
    } else if (names.length === 3) {
      msg = `${names[0]}, ${names[1]} and ${names[2]} like this`;
    }  else{
      msg = `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
    } 
    
    return msg 
  }