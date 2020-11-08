module.exports = [
    {
        "aliases": ["base64", "b64", "base 64"],
        "scripts": {
          "translateTo": function (a) {
            return Buffer.from(a).toString("base64");
          },
          "translateFrom": function (a) {
            return Buffer.from(a, "base64").toString("utf-8");
          }
        }
      },
      {
        "aliases": ["binary", "bin", "b"],
        "scripts": {
          "translateTo": function (a) {
            return a.split("").map(b => b.charCodeAt().toString(2)).map(b => {
              while (b.length < 8) {
                b = "0" + b
              }
              return b;
            }).join(" ");
          },
          "translateFrom": function (a) {
            return a.split(" ").map(b => String.fromCharCode(parseInt(b, 2))).join("");
          }
        }
      },
      {
        "aliases": ["hex", "x"],
        "scripts": {
          "translateTo": function (a) {
            return a.split("").map(b => b.charCodeAt().toString(16).toUpperCase()).join(" ");
          },
          "translateFrom": function (a) {
            return a.split(" ").map(b => String.fromCharCode(parseInt(b, 16))).join("");
          }
        }
      },
      module.exports = {
        "aliases": ["ternary", "3", "t"],
        "scripts": {
          "translateTo": function(a) {
            return a.split("").map(b => b.charCodeAt().toString(3)).map(b => {
              while (b.length < 6) {
                b = "0" + b
              }
              return b;
            }).join(" ");
          },
          "translateFrom": function (a) {
            return a.split(" ").map(b => String.fromCharCode(parseInt(b, 3))).join("");
          }
        }
      }
]