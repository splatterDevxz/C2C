module.exports = {
  ...   
  "settings": {
    "import/resolver": {
      "alias": {
        "map": [
            ["src", "./src"],
            ["pages", "./src/pages"],
            ["component", "./src/component"],
            ["images", "./src/assets/images"],
            ["fonts", "./src/assets/fonts"],
            ["styles", "./src/assets/scss"],
         ],   
         "extensions": [".js", ".jsx"]
      }
    },
},