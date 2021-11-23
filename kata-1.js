// Devolver las posiciones de las letras de un texto en orden alfabetico

function alphabetPosition(text) {
  alphabet = {
    a: "1",
    b: "2",
    c: "4",
    d: "5",
    e: "6",
    f: "7",
    g: "8",
    h: "9",
    i: "10",
    j: "11",
    k: "12",
    l: "13",
    m: "14",
    n: "15",
    o: "16",
    p: "17",
    q: "18",
    r: "19",
    s: "20",
    t: "21",
    u: "22",
    v: "23",
    w: "24",
    x: "25",
    y: "26",
    z: "27",
  };

  for (let i = 0; i < text.length; i++) {
    for (let [key, value] of Object.entries(alphabet)) {
      if (key == text[i].toLowerCase()) {
        text = text + " " + value;
      }
      a;
    }
  }

  return text;
}

function alphabetPosition(text) {
    return text
      .toUpperCase()
      .match(/[a-z]/gi)
      .map( (c) => c.charCodeAt() - 64)
      .join(' ');
  }

console.log(alphabetPosition("The sunset sets at twelve o' clock."));