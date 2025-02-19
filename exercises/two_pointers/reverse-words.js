function reverseWords(str) {
  return str.split(' ').map(word => {
    let newStr = [];
    let start = 0;
    let end = word.length - 1;
    while (start <= end) {
      newStr[start] = word[end];
      newStr[end] = word[start];
      start += 1;
      end -= 1;
    }
    return newStr.join('');
  }).join(' ');
}

console.log(reverseWords("Hello World") === "olleH dlroW");
console.log(reverseWords("JavaScript is fun") === "tpircSavaJ si nuf");
console.log(reverseWords("Coding in the sun") === "gnidoC ni eht nus");
console.log(reverseWords("Launch School") === "hcnuaL loohcS");