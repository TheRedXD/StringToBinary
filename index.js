var convertions = require('./conversions');
function translateTo(format, text) {
  format = convertions.find(a => a.aliases.some(b => b == format));
  if (!format) throw new Error("Invalid format!");
  return format.scripts.translateTo(text);
}

function translateFrom(format, text) {
  format = convertions.find(a => a.aliases.some(b => b == format));
  if (!format) throw new Error("Invalid format!");
  return format.scripts.translateFrom(text);
}

function translate(format1, format2, text) {
  format1 = convertions.find(a => a.aliases.some(b => b == format1));
  format2 = convertions.find(a => a.aliases.some(b => b == format2));
  if (!format1) throw new Error("Invalid format: " + format1);
  if (!format2) throw new Error("Invalid format: " + format2);
  return format2.scripts.translateTo(format1.scripts.translateFrom(text));
}
module.exports = {
  translateTo,
  translateFrom,
  translate
};
convertions.forEach(convertion => {
  module.exports[convertion.aliases[0]] = convertion.scripts;
})