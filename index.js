/**
 * @param {*} i Converts an ASCII string to binary. Usage: `stringToBinary("Your String Here")`
 */
function stringToBinary(i) {
  if (typeof i != 'string') throw new Error("Invalid");
  n = [];
  i.split("").forEach(m => {
    b = (m.charCodeAt()).toString(2);
    while (!(b.length == 8)) {
      b = 0 + b;
    }
    n.push(b); //I am in a node module yay
  });
  n = n.join(" ");
  return n;
};
/**
 * @param {*} i Converts an ASCII string to hex. Usage: `stringToHex("Your String Here")`
 */
function stringToHex(i) {
  if (typeof i != 'string') throw new Error("Invalid");
  n = [];
  i.split("").forEach(m => {
    b = (m.charCodeAt()).toString(16);
    n.push(b);
  });
  n = n.join(" ");
  return n;
};
module.exports = { stringToBinary, stringToHex };