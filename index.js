var convertions = [{ // Made by http://github.com/BlueBurgersTDD
  aliases: ['binary', 'bin'],
  scripts: {
    translateTo: function (a) {
      return a.split('').map(b => b.charCodeAt().toString(2)).map(b => { while (b.length < 8) { b = '0' + b } return b }).join(' ')
    },
    translateFrom: function (a) {
      return a.split(' ').map(b => String.fromCharCode(parseInt(b, 2))).join('')
    }
  }
},
{
  aliases: ['hex'],
  scripts: {
    translateTo: function (a) {
      return a.split('').map(b => b.charCodeAt().toString(16).toUpperCase()).join(' ')
    },
    translateFrom: function (a) {
      return a.split(' ').map(b => String.fromCharCode(parseInt(b, 16))).join('')
    }
  }
},
{
  aliases: ['base64', 'b64', 'base 64'],
  scripts: {
    translateTo: function (a) {
      return Buffer.from(a).toString('base64')
    },
    translateFrom: function (a) {
      return Buffer.from(a, 'base64').toString('utf-8')
    }
  }
}]
function translateTo (format, text) {
  format = convertions.find(a => a.aliases.some(b => b === format))
  if (!format) throw new Error('Invalid format!')
  return format.scripts.translateTo(text)
}
function translateFrom (format, text) {
  format = convertions.find(a => a.aliases.some(b => b === format))
  if (!format) throw new Error('Invalid format!')
  return format.scripts.translateFrom(text)
}
function translate (format1, format2, text) {
  format1 = convertions.find(a => a.aliases.some(b => b === format1))
  format2 = convertions.find(a => a.aliases.some(b => b === format2))
  if (!format1) throw new Error('Invalid format: ' + format1)
  if (!format2) throw new Error('Invalid format: ' + format2)
  return format2.scripts.translateTo(format1.scripts.translateFrom(text))
}
module.exports = {
  translateTo,
  translateFrom,
  translate
}
